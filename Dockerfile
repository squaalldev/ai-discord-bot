FROM node:lts-alpine
LABEL MAINTAINER Onur YILDIZ <onuryildizsai@gmail.com>

RUN mkdir discordsparkengine

WORKDIR /discordsparkengine

COPY package.json /discordsparkengine/

RUN npm install

COPY . /discordsparkengine/

CMD ["npm","start"]