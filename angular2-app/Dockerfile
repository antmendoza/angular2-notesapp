FROM node:boron

# Create front app directory
RUN mkdir -p /usr/src/app/front
WORKDIR /usr/src/app/front

# Install app dependencies
COPY package.json /usr/src/app/front/
RUN npm install

# Install typescript
RUN npm install typescript -g

# Bundle app source
COPY . /usr/src/app/front

#exposing port defined in serve/start.js
EXPOSE 3030

CMD [ "npm", "start" ]