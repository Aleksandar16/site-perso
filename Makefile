.PHONY: start up stop assets-watch

start: up

up:
	docker ps -q
	docker build . -f .\Dockerfile -t site-perso-docker
	docker compose up -d
	composer install -n
	npm install --force
	npm run build

stop:
	docker compose stop
	docker compose kill

assets-watch:
	npm run watch
