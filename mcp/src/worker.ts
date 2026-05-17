/**
 * ASPF MCP — Cloudflare Worker
 *
 * Wraps the ASPF MCP server for HTTP transport.
 * Deployed at mcp.aspf.io (or configured subdomain).
 *
 * Skill files are embedded as KV bindings or inline strings
 * since Cloudflare Workers don't have filesystem access.
 */

// Skill content is injected at build time via wrangler KV
// For local development, skill files are read from disk in index.ts (stdio transport)

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({
        status: "ok",
        server: "aspf-mcp",
        version: "1.0.0",
        tools: [
          "aspf_get_skill",
          "aspf_get_skills_for_entry",
          "aspf_detect_entry",
          "aspf_run_intake",
          "aspf_get_context",
          "aspf_write_artifact",
          "aspf_list_artifacts",
          "aspf_get_deck_prompt",
        ],
      }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // MCP endpoint
    if (url.pathname === "/mcp") {
      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
      }

      const body = await request.json() as Record<string, unknown>;
      const response = await handleMcpRequest(body, env);

      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};

interface Env {
  SKILLS_KV: KVNamespace;
}

async function handleMcpRequest(body: Record<string, unknown>, env: Env): Promise<unknown> {
  const { method, params } = body as {
    method: string;
    params: Record<string, unknown>;
    id?: string | number;
  };

  if (method === "tools/list") {
    return {
      result: {
        tools: [
          {
            name: "aspf_get_skill",
            description: "Return the full content of an ASPF skill file by name.",
            inputSchema: {
              type: "object",
              properties: { skill_name: { type: "string" } },
              required: ["skill_name"],
            },
          },
          {
            name: "aspf_detect_entry",
            description: "Classify an opening message as Before, During, or After.",
            inputSchema: {
              type: "object",
              properties: { message: { type: "string" } },
              required: ["message"],
            },
          },
          {
            name: "aspf_get_skills_for_entry",
            description: "Return the ordered skill sequence for an entry point.",
            inputSchema: {
              type: "object",
              properties: {
                entry_point: { type: "string", enum: ["before", "during", "after"] },
              },
              required: ["entry_point"],
            },
          },
          {
            name: "aspf_run_intake",
            description: "Run the ASPF decision tree intake. Returns entry point, first skill, and context questions.",
            inputSchema: {
              type: "object",
              properties: { message: { type: "string" } },
              required: ["message"],
            },
          },
        ],
      },
    };
  }

  if (method === "tools/call") {
    const { name, arguments: args } = params as { name: string; arguments: Record<string, unknown> };

    if (name === "aspf_get_skill") {
      const skillName = args.skill_name as string;
      const content = await env.SKILLS_KV.get(skillName) ?? await env.SKILLS_KV.get(`${skillName}.md`);

      if (!content) {
        return { error: { code: -32602, message: `Skill not found: ${skillName}` } };
      }

      return { result: { content: [{ type: "text", text: content }] } };
    }

    if (name === "aspf_detect_entry") {
      const message = (args.message as string).toLowerCase();
      const beforeSignals = ["thinking about", "want to use ai", "starting a new", "considering", "exploring ai", "new initiative", "haven't decided"];
      const duringSignals = ["currently", "we've been running", "our pilot", "in the middle", "something feels off", "underway"];
      const afterSignals = ["concluded", "finished", "completed", "looking back", "retrospective", "pilot ended"];

      const bHits = beforeSignals.filter(s => message.includes(s));
      const dHits = duringSignals.filter(s => message.includes(s));
      const aHits = afterSignals.filter(s => message.includes(s));

      let entry = "unknown";
      let confidence = "low";
      if (bHits.length > dHits.length && bHits.length > aHits.length) { entry = "before"; confidence = bHits.length >= 2 ? "high" : "medium"; }
      else if (dHits.length > bHits.length && dHits.length > aHits.length) { entry = "during"; confidence = dHits.length >= 2 ? "high" : "medium"; }
      else if (aHits.length > bHits.length && aHits.length > dHits.length) { entry = "after"; confidence = aHits.length >= 2 ? "high" : "medium"; }

      return { result: { content: [{ type: "text", text: JSON.stringify({ entry, confidence }) }] } };
    }

    if (name === "aspf_get_skills_for_entry") {
      const entry = args.entry_point as string;
      const sequences: Record<string, unknown[]> = {
        before: [
          { step: "01", skill: "problem-qualification", label: "Is this worth solving with AI?" },
          { step: "02", skill: "ai-method-selection",   label: "Which approach fits?" },
          { step: "03", skill: "responsible-ai",        label: "What are our ethical obligations?" },
          { step: "04", skill: "risk-mapping",          label: "What could go wrong?" },
          { step: "05", skill: "outcome-definition",    label: "How will we know it worked?" },
          { step: "06", skill: "readiness-audit",       label: "Are we ready to proceed?" },
        ],
        during: [
          { step: "01", skill: "mid-project-audit",    label: "Where has this drifted?" },
          { step: "02", skill: "model-monitoring",      label: "Is the system performing?" },
          { step: "03", skill: "user-feedback-loops",  label: "What are users experiencing?" },
        ],
        after: [
          { step: "01", skill: "retrospective",  label: "Did we achieve what we set out to?" },
          { step: "02", skill: "maturity-model", label: "How has our AI practice matured?" },
        ],
      };

      return { result: { content: [{ type: "text", text: JSON.stringify({ entry, sequence: sequences[entry] ?? [] }) }] } };
    }

    if (name === "aspf_run_intake") {
      const message = args.message as string;
      // Simplified intake for Worker — full version runs via stdio in Claude Code
      const lower = message.toLowerCase();
      let entry = "unknown";
      if (lower.includes("starting") || lower.includes("considering") || lower.includes("thinking about")) entry = "before";
      else if (lower.includes("currently") || lower.includes("underway") || lower.includes("in the middle")) entry = "during";
      else if (lower.includes("concluded") || lower.includes("finished") || lower.includes("retrospective")) entry = "after";

      const firstSkills: Record<string, string> = {
        before: "problem-qualification",
        during: "mid-project-audit",
        after: "retrospective",
      };

      const firstSkillContent = entry !== "unknown"
        ? await env.SKILLS_KV.get(firstSkills[entry])
        : null;

      return {
        result: {
          content: [{
            type: "text",
            text: JSON.stringify({
              detected_entry: entry === "unknown" ? null : entry,
              needs_clarification: entry === "unknown",
              context_questions: entry !== "unknown" ? [
                "What domain or problem space is this in?",
                "What roles are on your team?",
                "What has already been decided or done, if anything?",
              ] : null,
              first_skill: entry !== "unknown" ? firstSkills[entry] : null,
              first_skill_content: firstSkillContent,
            }),
          }],
        },
      };
    }

    return { error: { code: -32601, message: `Tool not found: ${name}` } };
  }

  return { error: { code: -32601, message: `Method not found: ${method}` } };
}
