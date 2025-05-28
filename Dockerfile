FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Final CMD doesn't matter, container will be used just to copy dist
CMD ["echo", "Build complete. Use docker cp to extract dist."]