# Docker services: Angular2 + Wildfly Swarm
This is a test to understand how to build something with docker-compose + Angular2 + Wildfly Swarm.

The angular app (front-end) also includes a node server and a data base to store articles and notes.

The Wildfly Swarm (back-end) is a rest service that exposes some methods to manage bookmarks, so that from the note list you can bookmark notes if the Wildfly Swarm application (bookmark-rest-app) is up.


## Instalation
Install docker 

Open your terminal and run **docker-compose up**

Open a browser and go to **localhost:8080**


## bookmark-rest-app (Wildfly Swarm application)
bookmark-rest-app is a rest end point, build with Wildfly Swarm. 

To run it, out of docker container, open a terminal and go to bookmark-rest-app folder, then run: 
- mvn clean install. Add angular profile (-Pangular) to generate an Angular2 client
- java -jar target/bookmark-rest-app-swarm.jar

Documentation of the rest service: http://localhost:8081/bookmark-rest-app/swagger/#/Booksmarks32REST32Endpoint
