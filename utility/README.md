## FootballStat service

### About

This service is a console utility that allows you to quickly find out statistics on a topic of interest to you from the world of football. This service uses the webserver data and works with its API key, so it will not be able to give an answer if the webserver is not running

### Installation 

You can start using this service in two ways

#### First ways

Before using this service, make sure that the webserver is running. If you don't have it running, then you can do as shown in [this instruction](https://github.com/nikitakozlovjr/docker-practic/blob/main/webserver/README.md#use)

After the web server is running, take the following steps to build the image and launch the container

##### Build image 

To build an image, use the command

If you are in the ~/docker-practical/utility directory:

```
docker build -t footservice .
```

If you are in the ~/docker-practical directory:

```
docker build -t footservice ./utility
```

##### Start service

Run the container based on the downloaded image with the following command

```
docker run -it --net=host footservice 
```

After the container is launched, the actions of your console will go to the container and you will immediately be able to use the service using the commands specified in [this section]()

#### Second way

You can also launch this service using docker compose by following the instructions [here]().

### Use

Using our server is easy. Use the `footballStat` command for this as follows.

To find the world champions:

```
footballStat worldChampions
```

To search for Champions League winners:

```
footballStat championsLeaque
```

To find the best scorers:

```
footballStat goldenboots
```

To find the best players in Europe:

```
footballStat europeanPlayers
```

To find the owners of the golden ball:

```
footballStat goldenballs
```