# Docker services: Angular2 + Wildfly Swarm
This is a test to understand how to build something with docker-compose + Angular2 + Wildfly Swarm.

The angular app (front-end) also includes a node server and a data base to store articles and notes.

The Wildfly Swarm (back-end) is a rest service that exposes some methods to manage bookmarks, so that from the note list you can bookmark notes if the Wildfly Swarm application (bookmark-rest-app) is up.


## Instalation
Install docker 

Open your terminal and run **docker-compose up**

Open a browser and go to **localhost:8080**