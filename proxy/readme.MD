# Documentación creación del balanceador de carga

## 1. Prerequisitos:

- Tener instalado y ejecutándose Docker, se puede seguir estas [instrucciones de instalación](https://docs.docker.com/engine/installation/ubuntulinux/)

## 2. Configuración del proxy:

Lo primero que se debe realizar es el archivo de configuración de nginx para configurar el balanceador de carga.

Primero, se coonfigura para que escuche n el puerto 8080 las solicitudes HTTP: `listen 8080;` </br>

Después, se especifica que se necesita un resolver, que es un DNS resolver, utilizando la dirección IPv4 que utiliza Docker para su servidor DNS. Además, en caso de escalar, se necesita que que se registré los cambios en los registros DNS, por lo que se especifica un tiempo corto de caché válido de DNS para que los resultados del resolve sean válidos `resolver 127.0.0.11 valid=5s;` </br>

Seguido a esto se define una variable `$upstream`que es la aplicación app-ui: `set $upstream http://app-ui:3030;` </br>


Si las solicitudes llegan a una carepta raíz "/", se redirige a la aplicación representada por app-ui:</br>
`location / {`</br>
    `proxy_pass $upstream;`</br>
  `}` </br>

Al final, el archivo debe quedar así:

`proxy.conf`
>`server {`</br>
>`listen 8080;`</br>
>`resolver 127.0.0.11 valid=5s;`</br>
>`set $upstream http://app-ui:3030;`</br>
>`location / {`</br>
>>`proxy_pass $upstream;`</br>
>`}`</br>
`}`</br>

## 3. Dockerfile

Para crear nuestro balanceador de carga se utiliza nginx, un servidor web de código abierto y un servidor proxy inverso: `FROM nginx:alpine` </br>

Lueugo, se elimina toda la configuración del servidor puesto qu se quiere colocar la configuración que se realizó en el paso anterior: `RUN rm /etc/nginx/conf.d/*` </br>

Por último, se copia al contenedor la configuración: `COPY proxy.conf /etc/nginx/conf.d` </br>

Al final, el archivo debe quedar así:

`FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY proxy.conf /etc/nginx/conf.d` </br>

## Información construida con base en:
- https://www.youtube.com/watch?v=BSKox1DEsQo
- https://cloudbuilder.in/blogs/2017/11/26/docker-compose-nginx-nodejs/
- https://github.com/minio/cookbook/blob/master/docs/multiple-minio-servers-with-nginx-inside-docker-container.md
