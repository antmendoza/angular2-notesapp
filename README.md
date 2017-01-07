# Angular app

## Installation
there are two ways to test this application:
* As node application. 
* Inside docker.

### As node application
Install node.

Install typescript
 
Open your terminal and run "npm start"

Open a browser and go to **localhost:8080**

### Inside docker
Install docker

Open your terminal and run:
* docker build -t notes-app .
* docker run -p 49160:8080 -d notes-app

Then open a browser and go to **localhost:49160**


