# --- Build Stage ---
FROM --platform=$BUILDPLATFORM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# --- Production Stage ---
FROM --platform=$TARGETPLATFORM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

RUN mv /usr/share/nginx/html/index.html /usr/share/nginx/html/index.html.template

# Copy nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add startup script
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

CMD ["/docker-entrypoint.sh"]
