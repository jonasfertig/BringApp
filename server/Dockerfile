# specify the node base image with your desired version node:<version>
FROM node:lts-alpine

WORKDIR /usr/src/app
COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install --silent
RUN npm install express-session --silent

COPY . .

CMD ["npm", "start"]