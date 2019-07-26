FROM nginx
WORKDIR /
COPY ./nginx.conf /etc/nginx/nginx.conf
ADD ./dist /usr/share/nginx/html