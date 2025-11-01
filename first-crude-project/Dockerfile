FROM ubuntu:latest
LABEL authors="dtbwi"

# Step 1: Build stage
FROM node:20.11-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Copy source code
COPY . .

# Build the NestJS app
RUN npm run build

# Make the entrypoint script executable
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]