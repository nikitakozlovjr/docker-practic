# docker-practic
Данный репозиторий создан для выполнения практической работы по предмету "Внедрение и поддержка компьютерных систем" на тему Docker и Docker Compose.

### About

___

This service allows you to study and find out the latest statistics on the areas of interest to you. This service includes, for your convenience, two options for using our statistical data, a [utility](https://github.com/nikitakozlovjr/docker-practic/blob/main/utility/README.md) and a web [service](https://github.com/nikitakozlovjr/docker-practic/blob/main/utility/README.md).

### Installation

___

Before you start using the service, make the following preparations

#### Cloning

Clone the repository with the following command

```
git clone git@github.com:nikitakozlovjr/docker-practic.git
```

#### Build

To build images of the utility and the web server, run the command from the root folder of the project

```
docker compose build
```

or 

```
make build
```

#### Start 

To run image-based containers in the background, use the command

```
docker compose up -d 
```

or

```
make run
```

Congratulations! Now you can use the webserver and the utility

### Use webserver

___

To use webserver, follow the [link](http://localhost:8000)

For a more detailed description of the use of the application, see [here](https://github.com/nikitakozlovjr/docker-practic/blob/main/webserver/README.md)

### Use utility

___

To use the utility, first go to the running utility container. To do this, use the following command

```
docker exec -it utility /bin/sh
```

or 

```
make utility-start
```

Detailed instructions on how to use the utility can be found [here](https://github.com/nikitakozlovjr/docker-practic/tree/main/utility#use)