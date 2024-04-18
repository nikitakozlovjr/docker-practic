build:
	docker compose build

run:
	docker compose up -d 

utility-start:
	docker exec -it utility /bin/sh