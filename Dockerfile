# --------------------
# 1) Builder stage
# --------------------
FROM node:20-slim AS builder
WORKDIR /usr/src/app

# Copy package files for layer caching
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Set build-time environment variables
ARG API_SERVER_ADDRESS
ENV API_SERVER_ADDRESS=${API_SERVER_ADDRESS:-http://api-gateway:80}
ENV NODE_ENV=production

# Build the application
RUN npm run build

# --------------------
# 2) Runner stage
# --------------------
FROM node:20-slim AS runner
WORKDIR /usr/src/app

# Set production environment
ENV NODE_ENV=production

# Install TypeScript explicitly for next.config.ts
RUN npm install --save-exact typescript

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.* ./
COPY --from=builder /usr/src/app/package.json ./

# Expose port
EXPOSE 3000

# Set environment variables for runtime
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["npm", "run", "start"]