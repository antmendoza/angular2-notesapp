FROM node:boron

# Create front app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY /angular-app/package.json /usr/src/app/
RUN npm install

# Install typescript
RUN npm install typescript -g

# Bundle app source
COPY /angular-app /usr/src/app

#exposing port defined in serve/start.js
EXPOSE 3030

CMD [ "npm", "start" ]