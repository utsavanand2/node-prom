FROM node:12.0.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY app.js ./

EXPOSE 8000

ENTRYPOINT ["npm", "start"]