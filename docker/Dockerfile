FROM php:8.3.1-apache

RUN apt-get update && apt-get upgrade -y && apt-get install -y git

# Activez l'extension pdo_mysql pour PHP
RUN docker-php-ext-install pdo_mysql

# Copiez votre code source dans le conteneur
COPY . /var/www/html/

# Installez Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
