FROM php:8.3.1-apache

RUN apt-get update && apt-get upgrade -y && apt-get install -y git

# Activez l'extension pdo_mysql pour PHP
RUN docker-php-ext-install pdo_mysql

# Copiez votre code source dans le conteneur
COPY . /var/www/html/

# Installez Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
