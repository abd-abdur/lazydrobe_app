# Build stage
FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build the application
RUN npm run build

# Runtime stage (Nginx)
FROM nginx:alpine

# Copy the built React app from the builder stage to Nginx's HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (standard web port)
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]