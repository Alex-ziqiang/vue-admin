FROM nginx
COPY vue-admin/nginx.conf /etc/nginx/nginx.conf
COPY vue-admin/dist /usr/share/nginx/html