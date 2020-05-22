# SD2020A-final-project
Repository to develop final project

## Equipo de trabajo

Alejandra Ramos (@alejandraRamos)

Sebastian Quintero (@squintero14)

Manuel Alejandro Coral (@ManuelCoral1998)

Andres David Varela (@dvlopez9811)

## Documentación

### Prerequisitos

- Tener instalado Docker-compose. Se puede seguir estas [instrucciones de instalación.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) </br>


Docker Compose es una herramienta para construir y coordinar aplicaciones de contenedores múltiples. Utiliza un archivo YAML para definir e iniciar diferentes contenedores y cualquier relación entre ellos. </br>

Se puede usar el Dockerfile como un bloque de construcción para Docker Compose.</br>

Como se puede evidenciar el en repositorio de Github, se tienen 5 carpetas:</br>

- app-ui: será el front-end de nuestra aplicación.
- proxy:
- rest-api:
- database:
- healtcheck:

Nuestra aplicación consiste en...

Cada carpeta contiene un Dockerfile el cual especifica cada contenedor. En el mismo orden que se especificaron las carpetas, se realizó el desarrollo.

(Se utiliza la versión 2.x para disponer de la opción scale, el cual permitirá configurar cuántos contenedores se tienen del front-end)

### Información construida con base en:
- https://github.com/ofstudio/docker-compose-scale-example/blob/master/docker-compose.yaml
- https://cloudbuilder.in/blogs/2017/11/26/docker-compose-nginx-nodejs/
- https://www.youtube.com/watch?v=BSKox1DEsQo