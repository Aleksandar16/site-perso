COMPOSE=docker-compose.yml
COMPOSE_MAC=$(COMPOSE) -f docker-compose-sync.yml
EXEC=$(COMPOSE) exec app
CONSOLE=$(EXEC) bin/console
ENVIRONMENT=$(shell bash ./scripts/get-env.sh)
SHELL := /bin/bash
MUTAGEN_NAME=$(shell bash ./scripts/get-mutagen-name.sh)

.PHONY: start up cc vendor stop rm

start: up vendor cc

up:
	docker ps -q
	cd docker && docker build .

stop:
	$(COMPOSE) stop
	$(COMPOSE) kill

rm:
	make stop
	$(COMPOSE) rm

vendor:
	composer install -n
	npm install
	npm run build
	symfony serve -d

cc:
	symfony console cache:clear
