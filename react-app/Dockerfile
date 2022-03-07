# specify the node base image with your desired version node:<version>
FROM node:lts-alpine

WORKDIR /home/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

CMD [ "npm", "start" ]