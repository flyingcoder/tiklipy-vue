# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./ 

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the frontend
RUN npm run build

# Expose the port that the Express app will run on
EXPOSE 3000

# Command to start the server
RUN npm run start