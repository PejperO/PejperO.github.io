# syntax=docker/dockerfile:1.3

FROM node:20.12.2-alpine

# Install needed tools
RUN apk add --no-cache git openssh bash

WORKDIR /app

# Add GitHub to known_hosts to avoid host key prompt
RUN mkdir -p ~/.ssh && \
    ssh-keyscan github.com >> ~/.ssh/known_hosts

# Copy and install
COPY package*.json ./
RUN --mount=type=ssh npm install

COPY . .

# Deploy with SSH access
RUN --mount=type=ssh npm run deploy
