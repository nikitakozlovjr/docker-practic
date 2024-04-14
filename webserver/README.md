## FutbolStatic service

### About

This web service provides great statistics for football fans and connoisseurs. Here you will find the best football players in the world, Europe, and scorers over the past 20 years. In addition, we follow team successes such as the World Cup and the Champions League. Our service is constantly developing and growing to constantly delight you with relevant news and statistics

### Use

If you want to use this service without a console utility and enjoy the information on the web, then there are several steps to use our server.

#### Cloning repository
To begin with, clone the repository locally for yourself, this can be done with the following command

```
git clone git@github.com:nikitakozlovjr/docker-practic.git
```
#### Build image
After that, you need to carefully **monitor which directory you are building the image from**.

If you are in the root folder of the project (i.e. ~/docker-practic), then use the command.

```
docker build -t webserver ./webserver
```

If you are in the webserver directory (i.e. ~/docker-practic/webserver), then use the command.

```
docker build -t webserver .
```

#### Start app

In order to launch the application, you need to launch a container based on the image that you installed in the previous step. This is done with the following command

```
docker run -p 8000:8000 webserver
```

after the container has started, you can use the application in the browser at http://localhost:8000

### API

