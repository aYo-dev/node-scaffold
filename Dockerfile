FROM node:alpine
MAINTAINER ayovcheff@gmail.com 
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install -g nodemon
RUN npm install
ADD . .
EXPOSE 3030
CMD ["npm", "start"]