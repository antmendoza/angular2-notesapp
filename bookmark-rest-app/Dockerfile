FROM maven:3-jdk-8

# Create front app directory
RUN mkdir -p /usr/src/app/back
WORKDIR /usr/src/app/back

# Install app dependencies
ADD . /usr/src/app/back
RUN mvn clean install

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/usr/src/app/back/target/bookmark-rest-app-swarm.jar"]