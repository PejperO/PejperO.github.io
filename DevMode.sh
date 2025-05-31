#!/bin/sh
set -e

IMAGE_NAME="pejpero-developer"
CONTAINER_NAME="pejpero-temp"

trap 'echo "❌ Failed to start dev server. Press Enter to exit..."; read' ERR

echo "🧪 Building Docker image for development..."
docker build -t $IMAGE_NAME -f Dockerfile .

echo "🚀 Starting development server in Docker container..."
docker run --rm -i \
  -v $(pwd):/app \
  -w /app \
  -p 3000:3000 \
  $IMAGE_NAME \
  sh -c "npm install && npm run dev"

read -p "🔒 Press Enter to close this window..."
