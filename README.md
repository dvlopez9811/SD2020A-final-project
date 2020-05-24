# SD2020A-final-project
Repository to develop final project

## Equipo de trabajo

Manuel Alejandro Coral Lozano (@ManuelCoral1998)

Juan Sebastián Quintero Yoshioka (@squintero14)

Alejandra Ramos Vélez (@alejandraRamos)

Andrés David Varela López (@dvlopez9811)

## Documentación

### Prerequisitos

- Tener instalado Docker-compose. Se puede seguir estas [instrucciones de instalación.](https://www.digitalocean.com/community/tutorials/como-instalar-docker-compose-en-ubuntu-18-04-es) </br>

Docker Compose es una herramienta para construir y coordinar aplicaciones de contenedores múltiples. Utiliza un archivo YAML para definir e iniciar diferentes contenedores y cualquier relación entre ellos. </br>

Se puede usar el Dockerfile como un bloque de construcción para Docker Compose.</br>

Como se puede evidenciar el en repositorio de Github, se tienen 5 carpetas:</br>

- app-ui: será el front-end de nuestra aplicación.
- proxy: contienen la configuración del proxy en nginx.
- rest-api: será el api-rest que se usará en nuestra aplicación.
- test: contiene los test del back/front end.

Cada carpeta contiene un Dockerfile el cual especifica el aprovsionamiento de cada contenedor.

### docker-compose.yml

Primero, se especifica la versión, se utiliza la versión 2.x para disponer de la opción scale, el cual permitirá configurar cuántos contenedores réplicas se tienen del front-end.

Después, se especifica servicio por servicio.

- mongo:

- rest-api:

- app-ui:

- proxy:

- networks:
-


### Información construida con base en:
- https://github.com/ofstudio/docker-compose-scale-example/blob/master/docker-compose.yaml
- https://cloudbuilder.in/blogs/2017/11/26/docker-compose-nginx-nodejs/
- https://www.youtube.com/watch?v=BSKox1DEsQo
