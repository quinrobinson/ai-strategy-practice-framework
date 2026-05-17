/**
 * ASPF MCP Server
 * AI Strategy Practice Framework
 * Deployed to Cloudflare Workers at mcp.aspf.io
 *
 * Tools:
 *   aspf_get_skill           — Return skill file content by name
 *   aspf_get_skills_for_entry — Return ordered skill sequence for an entry point
 *   aspf_detect_entry        — Classify an opening message as Before/During/After
 *   aspf_run_intake          — Run decision tree intake, return entry + first skill
 *   aspf_get_context         — Read .aspf/context.json + list artifacts
 *   aspf_write_artifact      — Write a skill output to .aspf/artifacts/
 *   aspf_list_artifacts      — List all artifacts produced in this project
 *   aspf_get_deck_prompt     — Return a PowerPoint generation prompt for an artifact
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";

// ─── Skill content ────────────────────────────────────────────────────────────
// Skill files are embedded at build time so the MCP server is self-contained.
// In Cloudflare Workers deployment, these are loaded from KV or embedded as strings.

const SKILLS_DIR = path.join(__dirname, "../../skills");

function getSkillContent(skillName: string): string {
  const fileName = skillName.endsWith(".md") ? skillName : `${skillName}.md`;
  const filePath = path.join(SKILLS_DIR, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Skill not found: ${skillName}. Available skills: ${getAvailableSkills().join(", ")}`);
  }
  return fs.readFileSync(filePath, "utf-8");
}

function getAvailableSkills(): string[] {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs.readdirSync(SKILLS_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(".md", ""));
}

// ─── Entry point sequences ────────────────────────────────────────────────────

const ENTRY_SEQUENCES: Record<string, Array<{ skill: string; label: string; step: string }>> = {
  before: [
    { step: "01", skill: "problem-qualification",  label: "Is this worth solving with AI?" },
    { step: "02", skill: "ai-method-selection",    label: "Which approach fits?" },
    { step: "03", skill: "responsible-ai",         label: "What are our ethical obligations?" },
    { step: "04", skill: "risk-mapping",           label: "What could go wrong?" },
    { step: "05", skill: "outcome-definition",     label: "How will we know it worked?" },
    { step: "06", skill: "readiness-audit",        label: "Are we ready to proceed?" },
  ],
  during: [
    { step: "01", skill: "mid-project-audit",      label: "Where has this drifted from the original intent?" },
    { step: "02", skill: "model-monitoring",        label: "Is the AI system still performing correctly?" },
    { step: "03", skill: "user-feedback-loops",    label: "What are users actually experiencing?" },
  ],
  after: [
    { step: "01", skill: "retrospective",          label: "Did we achieve what we set out to?" },
    { step: "02", skill: "maturity-model",         label: "How has our AI practice matured?" },
  ],
};

// ─── Entry point detection ────────────────────────────────────────────────────

const BEFORE_SIGNALS = [
  "thinking about", "want to use ai", "should we use ai", "is ai right",
  "starting a new", "exploring ai", "considering", "we've been asked to",
  "don't know where to start", "new project", "new initiative",
  "haven't decided", "haven't committed", "evaluating",
];

const DURING_SIGNALS = [
  "currently", "we've been running", "our pilot", "we launched",
  "not working as expected", "we're stuck", "something feels off",
  "we hit a wall", "unexpected results", "our ai is doing",
  "in the middle", "underway", "active initiative",
];

const AFTER_SIGNALS = [
  "pilot ended", "we wrapped up", "it's been", "looking back",
  "we shut it down", "we shipped it", "how did we do", "what worked",
  "concluded", "finished", "completed", "retrospective",
];

function detectEntryPoint(message: string): {
  entry: "before" | "during" | "after" | "unknown";
  confidence: "high" | "medium" | "low";
  signals: string[];
} {
  const lower = message.toLowerCase();
  const beforeHits = BEFORE_SIGNALS.filter(s => lower.includes(s));
  const duringHits = DURING_SIGNALS.filter(s => lower.includes(s));
  const afterHits  = AFTER_SIGNALS.filter(s => lower.includes(s));

  const counts = { before: beforeHits.length, during: duringHits.length, after: afterHits.length };
  const max = Math.max(...Object.values(counts));

  if (max === 0) return { entry: "unknown", confidence: "low", signals: [] };

  const winner = (Object.keys(counts) as Array<"before" | "during" | "after">)
    .find(k => counts[k] === max)!;

  return {
    entry: winner,
    confidence: max >= 2 ? "high" : "medium",
    signals: winner === "before" ? beforeHits : winner === "during" ? duringHits : afterHits,
  };
}

// ─── Context file helpers ─────────────────────────────────────────────────────

const ASPF_DIR = path.join(process.cwd(), ".aspf");
const CONTEXT_FILE = path.join(ASPF_DIR, "context.json");
const ARTIFACTS_DIR = path.join(ASPF_DIR, "artifacts");

interface AspfContext {
  project: string;
  entry_point: string;
  session_date: string;
  agents_activated: string[];
  skills_completed: string[];
  predictor_flags: string[];
  decisions: string[];
  open_questions: string[];
  apdf_handoff_status: string;
}

function readContext(): AspfContext | null {
  if (!fs.existsSync(CONTEXT_FILE)) return null;
  return JSON.parse(fs.readFileSync(CONTEXT_FILE, "utf-8"));
}

function listArtifacts(): Array<{ name: string; skill: string; created: string }> {
  if (!fs.existsSync(ARTIFACTS_DIR)) return [];
  return fs.readdirSync(ARTIFACTS_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => {
      const stat = fs.statSync(path.join(ARTIFACTS_DIR, f));
      return {
        name: f,
        skill: f.replace(".md", ""),
        created: stat.mtime.toISOString(),
      };
    });
}

function readArtifact(skillName: string): string | null {
  const fileName = skillName.endsWith(".md") ? skillName : `${skillName}.md`;
  const filePath = path.join(ARTIFACTS_DIR, fileName);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

// ─── Deck prompt templates ────────────────────────────────────────────────────

function getDeckPrompt(artifactName: string, artifactContent: string): string {
  const skill = artifactName.replace(".md", "");

  const deckStructures: Record<string, string> = {
    "problem-qualification": `
Slide 1 — Title
  Title: AI Initiative — Problem Qualification
  Subtitle: [Project name] | [Date]

Slide 2 — Problem Statement
  Heading: The Problem
  Body: [Problem statement from the artifact]

Slide 3 — AI Fit Assessment
  Heading: AI Fit Score: [X] / 10
  Five rows: Data Availability | Pattern Dependency | Scale Requirement | Human Judgment | Error Tolerance
  Each row: criterion name + Pass/Caution/Fail indicator

Slide 4 — Classification & Decision
  Heading: [Strong / Conditional / Weak / Poor] AI Fit
  Body: Decision — [Proceed / Proceed with conditions / Explore alternatives / Do not proceed]
  Sub: Key conditions or constraints

Slide 5 — Next Steps
  Heading: Next Step
  Body: [First action — method selection or alternative path]`,

    "risk-mapping": `
Slide 1 — Title
  Title: AI Risk Register
  Subtitle: [Project name] | [Date]

Slide 2 — Risk Overview
  Heading: Risk Summary
  Four columns: Technical | Ethical | Organizational | Legal
  Each column: count of Critical / High / Medium / Low risks

Slide 3 — Critical Risks
  Heading: Critical Risks — Require Immediate Attention
  For each Critical risk: Risk name | Severity x Likelihood | Mitigation | Owner

Slide 4 — Risk Posture
  Heading: Overall Risk Posture: [Low / Medium / High / Critical]
  Body: Recommendation — [Proceed / Proceed with conditions / Pause / Stop]

Slide 5 — Monitoring Triggers
  Heading: What We're Watching
  Body: Key monitoring signals with thresholds`,

    "outcome-definition": `
Slide 1 — Title
  Title: AI Initiative — Outcome Brief
  Subtitle: [Project name] | [Date]

Slide 2 — The Outcome
  Heading: What We're Trying to Achieve
  Body: [Full hypothesis-format outcome statement]

Slide 3 — How We'll Measure It
  Heading: Success Metrics
  Primary metric: [Name] — Baseline: [X] → Target: [Y] by [Date]
  Supporting metrics: [2-3 metrics]
  Guardrail metrics: [Must not degrade]

Slide 4 — Definition of Failure
  Heading: When We'll Reassess
  Body: [Definition of failure from the artifact]

Slide 5 — Measurement Plan
  Heading: How We Track This
  Baseline established: [How]
  Ongoing measurement: [Method and cadence]
  Review owner: [Role]`,

    "readiness-audit": `
Slide 1 — Title
  Title: AI Readiness Audit
  Subtitle: [Project name] | [Date]

Slide 2 — Readiness Score
  Heading: Readiness Score: [X] / 100
  Four quadrants: People [X/25] | Data [X/25] | Tooling [X/25] | Process [X/25]
  Classification: [Ready / Mostly ready / Partially ready / Not ready]

Slide 3 — Critical Gaps
  Heading: Gaps That Must Be Resolved
  For each critical gap: Dimension | Gap description | Owner | Timeline | Blocker?

Slide 4 — Recommendation
  Heading: [Proceed / Proceed with conditions / Pause / Stop]
  Body: Rationale and conditions

Slide 5 — Remediation Plan
  Heading: What Happens Next
  Table: Gap | Owner | Timeline`,

    "stakeholder-alignment": `
Slide 1 — Title
  Title: Stakeholder Alignment
  Subtitle: [Project name] | [Date]

Slide 2 — Stakeholder Map
  Heading: Who's in the Room
  Matrix: High influence / Low influence × Champion / Neutral / Skeptic / Blocker

Slide 3 — Key Concerns
  Heading: What Stakeholders Need to Hear
  For each high-influence stakeholder: Name/Role | Primary concern | Our response

Slide 4 — Engagement Plan
  Heading: Path to Alignment
  Timeline: Week-by-week engagement sequence

Slide 5 — Status
  Heading: Alignment Status: [Ready to present / Pre-work required]
  Body: What must happen before formal presentation`,

    "retrospective": `
Slide 1 — Title
  Title: AI Initiative Retrospective
  Subtitle: [Project name] | [Date range]

Slide 2 — Outcome
  Heading: Did We Achieve What We Set Out To?
  Primary metric: [Intended → Actual → Delta]
  Overall outcome: [Exceeded / Met / Partially met / Missed]

Slide 3 — What Worked
  Heading: What We'd Repeat
  [Top 3 practices that produced good results]

Slide 4 — What We'd Change
  Heading: What We'd Do Differently
  [Top 3 changes for the next initiative]

Slide 5 — Feed Forward
  Heading: What the Next Team Should Know
  [Key lessons for the next AI initiative]`,
  };

  const structure = deckStructures[skill] || `
Slide 1 — Title
  Title: ${skill.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
  Subtitle: [Project name] | [Date]

Slide 2 — Summary
  Heading: Summary
  Body: [Key output from this skill session]

Slide 3 — Key Findings
  Heading: What We Learned
  Body: [Main findings, decisions, or recommendations]

Slide 4 — Decisions Made
  Heading: Decisions
  Body: [Explicit decisions made as a result of this skill]

Slide 5 — Next Steps
  Heading: What Happens Next
  Body: [Next action with owner and timeline]`;

  return `You are building a PowerPoint presentation from an ASPF skill output.

SKILL: ${skill}

ARTIFACT CONTENT:
${artifactContent}

SLIDE STRUCTURE:
${structure}

INSTRUCTIONS:
- Use the artifact content to populate each slide with real data — not placeholders
- Maintain the ASPF design language: dark background (#0F0F0F), white foreground, mono caps for labels
- Keep each slide focused on one idea — no bullet-dense slides
- Speaker notes on every slide: one sentence on what to say and what question to anticipate
- Export as a .pptx file named: aspf-${skill}-[project-name].pptx

Generate the PptxGenJS code to create this deck. Use the pptx skill file for the exact API.`;
}

// ─── MCP Server ───────────────────────────────────────────────────────────────

const server = new Server(
  { name: "aspf-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "aspf_get_skill",
      description: "Return the full content of an ASPF skill file by name. Use this instead of asking the user to upload a file.",
      inputSchema: {
        type: "object",
        properties: {
          skill_name: { type: "string", description: "Skill name (e.g. 'problem-qualification', 'risk-mapping')" },
        },
        required: ["skill_name"],
      },
    },
    {
      name: "aspf_get_skills_for_entry",
      description: "Return the ordered skill sequence for a given entry point (before/during/after).",
      inputSchema: {
        type: "object",
        properties: {
          entry_point: { type: "string", enum: ["before", "during", "after"], description: "The entry point" },
          include_content: { type: "boolean", description: "If true, include full skill file content for each skill", default: false },
        },
        required: ["entry_point"],
      },
    },
    {
      name: "aspf_detect_entry",
      description: "Classify an opening message as Before, During, or After. Use at the start of every ASPF session before asking clarifying questions.",
      inputSchema: {
        type: "object",
        properties: {
          message: { type: "string", description: "The user's opening message describing their situation" },
        },
        required: ["message"],
      },
    },
    {
      name: "aspf_run_intake",
      description: "Run the ASPF decision tree intake. Detects entry point, returns the first skill to run, and the three context questions to ask.",
      inputSchema: {
        type: "object",
        properties: {
          message: { type: "string", description: "The user's opening message" },
          include_first_skill: { type: "boolean", description: "If true, include the full first skill file content", default: true },
        },
        required: ["message"],
      },
    },
    {
      name: "aspf_get_context",
      description: "Read the current .aspf/context.json and list all artifacts produced in this project. Use at the start of any session to load prior context.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "aspf_write_artifact",
      description: "Write a skill session output to .aspf/artifacts/. Call this at the end of every skill session with the structured output.",
      inputSchema: {
        type: "object",
        properties: {
          skill_name: { type: "string", description: "Skill name (used as filename)" },
          content: { type: "string", description: "The full structured output from the skill session" },
          update_context: { type: "boolean", description: "If true, mark this skill as completed in context.json", default: true },
        },
        required: ["skill_name", "content"],
      },
    },
    {
      name: "aspf_list_artifacts",
      description: "List all artifacts produced in this ASPF project session.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "aspf_get_deck_prompt",
      description: "Return a PowerPoint generation prompt for a named artifact. Use when the user runs /project:deck or asks for a presentation of a skill output.",
      inputSchema: {
        type: "object",
        properties: {
          artifact_name: { type: "string", description: "Artifact name (e.g. 'risk-mapping', 'outcome-definition')" },
        },
        required: ["artifact_name"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {

      case "aspf_get_skill": {
        const { skill_name } = args as { skill_name: string };
        const content = getSkillContent(skill_name);
        return { content: [{ type: "text", text: content }] };
      }

      case "aspf_get_skills_for_entry": {
        const { entry_point, include_content = false } = args as { entry_point: string; include_content?: boolean };
        const sequence = ENTRY_SEQUENCES[entry_point];
        if (!sequence) throw new Error(`Unknown entry point: ${entry_point}`);

        const result = include_content
          ? sequence.map(s => ({ ...s, content: getSkillContent(s.skill) }))
          : sequence;

        return {
          content: [{
            type: "text",
            text: JSON.stringify({ entry_point, sequence: result }, null, 2),
          }],
        };
      }

      case "aspf_detect_entry": {
        const { message } = args as { message: string };
        const result = detectEntryPoint(message);
        return {
          content: [{
            type: "text",
            text: JSON.stringify(result, null, 2),
          }],
        };
      }

      case "aspf_run_intake": {
        const { message, include_first_skill = true } = args as { message: string; include_first_skill?: boolean };
        const detection = detectEntryPoint(message);

        const entry = detection.entry === "unknown" ? null : detection.entry;
        const sequence = entry ? ENTRY_SEQUENCES[entry] : null;
        const firstSkill = sequence ? sequence[0] : null;
        const firstSkillContent = firstSkill && include_first_skill
          ? getSkillContent(firstSkill.skill)
          : null;

        const contextQuestions = [
          "What domain or problem space is this in?",
          "What roles are on your team?",
          "What has already been decided or done, if anything?",
        ];

        return {
          content: [{
            type: "text",
            text: JSON.stringify({
              detected_entry: entry,
              confidence: detection.confidence,
              signals: detection.signals,
              needs_clarification: entry === null,
              clarification_question: entry === null
                ? "Are you starting a new AI initiative, checking in on one underway, or evaluating one that's concluded?"
                : null,
              context_questions: entry ? contextQuestions : null,
              first_skill: firstSkill,
              first_skill_content: firstSkillContent,
              full_sequence: sequence,
            }, null, 2),
          }],
        };
      }

      case "aspf_get_context": {
        const context = readContext();
        const artifacts = listArtifacts();
        return {
          content: [{
            type: "text",
            text: JSON.stringify({ context, artifacts }, null, 2),
          }],
        };
      }

      case "aspf_write_artifact": {
        const { skill_name, content, update_context = true } = args as {
          skill_name: string; content: string; update_context?: boolean;
        };

        if (!fs.existsSync(ARTIFACTS_DIR)) fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

        const fileName = skill_name.endsWith(".md") ? skill_name : `${skill_name}.md`;
        const filePath = path.join(ARTIFACTS_DIR, fileName);
        fs.writeFileSync(filePath, content, "utf-8");

        if (update_context && fs.existsSync(CONTEXT_FILE)) {
          const ctx: AspfContext = JSON.parse(fs.readFileSync(CONTEXT_FILE, "utf-8"));
          const skillBase = skill_name.replace(".md", "");
          if (!ctx.skills_completed.includes(skillBase)) {
            ctx.skills_completed.push(skillBase);
          }
          fs.writeFileSync(CONTEXT_FILE, JSON.stringify(ctx, null, 2), "utf-8");
        }

        return {
          content: [{
            type: "text",
            text: `Artifact written: .aspf/artifacts/${fileName}`,
          }],
        };
      }

      case "aspf_list_artifacts": {
        const artifacts = listArtifacts();
        return {
          content: [{
            type: "text",
            text: JSON.stringify({ artifacts, count: artifacts.length }, null, 2),
          }],
        };
      }

      case "aspf_get_deck_prompt": {
        const { artifact_name } = args as { artifact_name: string };
        const content = readArtifact(artifact_name);

        if (!content) {
          return {
            content: [{
              type: "text",
              text: `Artifact not found: ${artifact_name}. Run the skill session first, then call aspf_write_artifact to save the output.`,
            }],
          };
        }

        const prompt = getDeckPrompt(artifact_name, content);
        return { content: [{ type: "text", text: prompt }] };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { content: [{ type: "text", text: `Error: ${message}` }], isError: true };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("ASPF MCP server running");
}

main().catch(console.error);
