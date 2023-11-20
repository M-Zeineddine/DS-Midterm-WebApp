# Use an official nginx image as a parent image
FROM nginx:alpine

# Copy static content into nginx server
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
