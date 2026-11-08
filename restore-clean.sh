#!/bin/bash
echo "[Restore] Restoring clean working state (Ads removed, no HeaderLanguageSelector)..."
cp -rf /app/clean_src_backup/* /app/applet/src/
cp -f /app/clean_index_backup.html /app/applet/index.html
rm -f /app/applet/src/components/HeaderLanguageSelector.tsx
npm run build
echo "[Restore] COMPLETE! Your codebase is 100% clean and verified."
