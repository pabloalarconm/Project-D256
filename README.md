# **Project D256:** Web service based Websocket communications for rolling dices virtually.

Chat your rolls with friends for games like Dungeons & Dragons, Fiasco and more. This web service is based on a Adonisjs API with Websocket integrated running in port 8080, and an Angular-based Client that enables a variety of dice's rolls, running in port 4200.


## For instalation:

### Manualy (Nodejs, NPM and Angular required):

For server api:
```sh
cd d256_server && npm start serve
```


For client-side app:
```sh
cd d256_cli && ng serve -o
```


### Dockerized version are available in [Docker hub](https://hub.docker.com/):

[For server api](https://hub.docker.com/repository/docker/pabloalarconm/d256_server):
```sh
docker push pabloalarconm/d256_client:latest
docker run -p 8080:8080 pabloalarconm/d256_client
```


[For client-side app](https://hub.docker.com/repository/docker/pabloalarconm/d256_client):
```sh
docker push pabloalarconm/d256_server:latest
docker run -p 4200:4200 pabloalarconm/d256_server
```

### * Also, Docker compose version are available (Recommended):

By running [docker-compose.yaml](https://github.com/pabloalarconm/SemanticFreak/blob/main/docker-compose.yaml) file:

```sh
sudo docker-compose up
```
Distribution of the Docker images:

```yml
version: "0.1"
services:
    d256_server:
        image: pabloalarconm/d256_server:0.1.0
        ports:
            - "8080:8080"

    256_client:
        image: pabloalarconm/d256_client:0.1.0
        ports:
            - "4200:4200"
```
