# base image
FROM node:12.2.0
RUN apt-get update
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.9 --unsafe
COPY . /app
CMD ng serve --host 0.0.0.0 --proxy-config proxy.conf.json
