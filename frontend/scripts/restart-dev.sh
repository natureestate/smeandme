#!/bin/zsh
set -euo pipefail

PORT=${PORT:-3000}

echo "[restart-dev] Ensuring port ${PORT} is free..."

# Find PIDs listening on the port (macOS)
PIDS=$(lsof -nP -iTCP:${PORT} -sTCP:LISTEN -t || true)
if [ -n "${PIDS}" ]; then
  echo "[restart-dev] Killing PIDs on port ${PORT}: ${PIDS}"
  # Try graceful kill first, then force if needed
  kill ${PIDS} 2>/dev/null || true
  sleep 0.5
  STILL=$(lsof -nP -iTCP:${PORT} -sTCP:LISTEN -t || true)
  if [ -n "${STILL}" ]; then
    echo "[restart-dev] Forcing kill: ${STILL}"
    kill -9 ${STILL} 2>/dev/null || true
  fi
fi

# Wait until port is free
for i in {1..30}; do
  if lsof -nP -iTCP:${PORT} -sTCP:LISTEN -t >/dev/null 2>&1; then
    sleep 0.2
  else
    break
  fi
done

echo "[restart-dev] Cleaning .next to avoid stale chunks..."
rm -rf .next

echo "[restart-dev] Starting Next.js dev on port ${PORT}"
exec npm run dev -- --port=${PORT}


