# Use Node.js as base
FROM node:18-slim

# Create app directory
WORKDIR /app

# Copy package files (if we had them, otherwise we use the standard ones)
# COPY package*.json ./
# RUN npm install

# For this demo, we assume express and ws are available or installed
RUN npm install express ws

# Copy source
COPY . .

# Expose API and WebSocket ports
EXPOSE 3001

CMD [ "node", "server.js" ]
