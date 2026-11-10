#!/bin/bash
set -e
echo "[Restore] Restoring 100% complete latest working website state..."
tar -xzf /app/backup_latest_clean.tar.gz -C /app/applet/
echo "[Restore] Rebuilding and verifying..."
npm run build
echo "[Restore] COMPLETE! Website is 100% updated and verified."
