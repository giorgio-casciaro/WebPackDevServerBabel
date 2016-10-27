FROM node:slim

MAINTAINER Giorgio Casciaro <giorgio.casciaro@gmail.com>

RUN useradd -ms /bin/bash service



VOLUME /app

EXPOSE 3000

WORKDIR /app

#RUN npm install -g vue-cli
RUN apt-get update
RUN apt-get install  -y  unzip
RUN apt-get install  -y  git
#RUN apt-get install -y git
USER service

#
# FROM nginx:latest
# ADD ./default.conf /etc/nginx/conf.d/
# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_6.x | /bin/bash -
# RUN apt-get install -y nodejs
# #RUN apt-get install -y nodejs
# #RUN apt-get install -y npm
#
# RUN apt-get update
# ENV NODE_ENV="/usr/bin/nodejs"
# RUN npm install -g vue-cli
#
# WORKDIR /var/www
