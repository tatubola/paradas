FROM node:8-slim
WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8081