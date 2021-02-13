FROM node:12.20.1-alpine

RUN \
  apk add --update --no-cache git openssh-client python3 \
  && npm install -g nodemon

WORKDIR /usr/src/app

COPY package.json .

EXPOSE 3004