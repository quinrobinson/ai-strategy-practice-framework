#!/bin/bash
# upload-skills-to-kv.sh
# Uploads all ASPF skill files to Cloudflare KV for the MCP Worker
# Run this whenever skill files are updated

KV_ID="placeholder-replace-with-real-kv-id"
SKILLS_DIR="../skills"

echo "Uploading ASPF skill files to Cloudflare KV..."

for file in "$SKILLS_DIR"/*.md; do
  skill_name=$(basename "$file" .md)
  echo "  Uploading: $skill_name"
  wrangler kv:key put --binding=SKILLS_KV "$skill_name" --path="$file" --namespace-id="$KV_ID"
done

echo "Done. $(ls $SKILLS_DIR/*.md | wc -l) skill files uploaded."
echo ""
echo "Next: Update wrangler.toml with your real KV namespace ID, then run:"
echo "  wrangler deploy"
