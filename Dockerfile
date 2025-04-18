FROM nginx:alpine

# Copy website files to nginx server
COPY . /usr/share/nginx/html/

# Configure nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port specified in environment variable or default to 8080
EXPOSE 8080

# Use environment variable for port configuration
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
