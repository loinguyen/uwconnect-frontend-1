FROM node:18.14.0-bullseye

WORKDIR /client

COPY . /client/

RUN npm install

EXPOSE 3000

CMD npm start
