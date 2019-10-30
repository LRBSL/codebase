FROM node:12.2.0
RUN apt-get update
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g nodemon
COPY . /app
EXPOSE 3000
CMD [ "nodemon", "start" ]
