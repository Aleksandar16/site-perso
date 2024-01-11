COMPOSE=docker-compose -f docker-compose.yml -f docker-compose-dev.yml
COMPOSE_MAC=$(COMPOSE) -f docker-compose-sync.yml
EXEC=$(COMPOSE) exec app
CONSOLE=$(EXEC) bin/console
ENVIRONMENT=$(shell bash ./scripts/get-env.sh)
SHELL := /bin/bash
MUTAGEN_NAME=$(shell bash ./scripts/get-mutagen-name.sh)

.PHONY: start up perm db cc ssh vendor assets assets-watch stop rm
.PHONY: maintenance-on maintenance-off

.PHONY: start up cc vendor assets assets-watch stop rm

start: up vendor assets cc

up:
	docker kill $$(docker ps -q) || true
	$(COMPOSE) build --force-rm
	$(COMPOSE) up -d

stop:
	$(COMPOSE) stop
	$(COMPOSE) kill

rm:
	make stop
	$(COMPOSE) rm

vendor:
	$(EXEC) composer install -n
	$(EXEC) yarn install --pure-lockfile

run:
	$(EXEC) $(c)

sf:
	$(EXEC) bin/console $(c)

assets:
	$(EXEC) bin/console assets:install
	$(EXEC) yarn run encore dev

assets-watch:
	$(EXEC) bin/console assets:install
	$(EXEC) yarn watch

cc:
	$(EXEC) bin/console c:cl --no-warmup
	$(EXEC) bin/console c:warmup
