# the build process

# base image
FROM node:8.9.4
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . ./
RUN npm build
