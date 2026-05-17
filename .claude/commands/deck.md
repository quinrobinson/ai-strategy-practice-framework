# /project:deck

Generate a PowerPoint presentation from a completed ASPF skill artifact.

## Usage
```
/project:deck [artifact-name]
```

Examples:
- `/project:deck risk-mapping`
- `/project:deck outcome-definition`
- `/project:deck readiness-audit`

## What this command does

1. Calls `aspf_list_artifacts` to verify the artifact exists
2. Calls `aspf_get_deck_prompt` to retrieve the slide structure and generation prompt
3. Installs `pptxgenjs` if not already installed (`npm install pptxgenjs`)
4. Generates a `.pptx` file using PptxGenJS — styled in ASPF dark theme
5. Saves to `.aspf/decks/[artifact-name]-[project-name].pptx`

## When to run

The framework will suggest running this command at the end of stakeholder-ready skill outputs:
- After `stakeholder-alignment` — leadership case deck
- After `risk-mapping` — risk register deck for governance review
- After `outcome-definition` — outcome brief deck for leadership
- After `readiness-audit` — readiness report deck
- After `retrospective` — retrospective summary deck

Run it any time you need to present a skill output to stakeholders who aren't in Claude.

## ASPF deck design rules

All generated decks follow these rules:
- Dark background: #0F0F0F
- White foreground: #F2F2F2
- Accent gradient: #863BFF → #E9810C (purple to orange)
- Display font: Inter (semibold)
- Body font: DM Sans
- Label/mono font: JetBrains Mono (uppercase, wide tracking)
- Entry point color on title slide: Before (#3B82F6) / During (#F59E0B) / After (#EF4444)
- Five slides maximum per skill output — one idea per slide
- Speaker notes on every slide

## Claude Chat alternative

If you're using Claude Chat instead of Claude Code, run `/project:deck` in Claude Code is not available. Instead:
1. Run `aspf_get_deck_prompt` via the MCP server
2. Paste the returned prompt into a new Claude Chat conversation
3. Claude will generate the slide structure as formatted text you can import into PowerPoint or Google Slides
