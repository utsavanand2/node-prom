FROM node:12.0.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY app.js ./

EXPOSE 8080

ENTRYPOINT ["npm", "start"]