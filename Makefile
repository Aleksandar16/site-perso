.PHONY: start up stop

start: up

up:
	docker ps -q
	docker build . -f .\Dockerfile -t site-perso-docker
	docker compose up -d

stop:
	docker compose stop
	docker compose kill
