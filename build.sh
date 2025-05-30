#!/bin/sh
set -e

IMAGE_NAME="pejpero-builder"
CONTAINER_NAME="pejpero-temp"

echo "🛠️ Building Docker image..."
docker build -t $IMAGE_NAME .

echo "🚀 Running container to build project..."
docker create --name $CONTAINER_NAME $IMAGE_NAME

echo "📦 Copying dist/ from container to host..."
rm -rf ./dist
docker cp $CONTAINER_NAME:/app/dist ./dist

echo "🧹 Cleaning up..."
docker rm $CONTAINER_NAME > /dev/null

echo "✅ Done! dist/ is now available on your host."
