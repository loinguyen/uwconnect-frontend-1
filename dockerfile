# Need to switch to another container
FROM node:13.12.0-alpine

WORKDIR /client

COPY . /client/

RUN npm install

EXPOSE 3000

CMD npm start
