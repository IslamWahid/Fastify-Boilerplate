FROM node:lts-alpine

LABEL maintainer="IslamWahid <eng.islamwahid@gmail.com>"

EXPOSE 3000

ADD . /app
WORKDIR /app

RUN npm install