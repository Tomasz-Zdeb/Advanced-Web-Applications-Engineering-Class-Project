# Use the official Node.js image as a base image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI and application dependencies
RUN npm install -g @angular/cli && npm install

# Copy the rest of the application to the container
COPY . .

# Build the Angular application
RUN ng build --configuration=production

# Use Nginx for serving the built application
FROM nginx:alpine

# Copy the build output to the Nginx default directory
COPY --from=build /app/dist/swims/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
