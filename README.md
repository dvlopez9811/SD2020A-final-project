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


### Desarrollo
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

Después, se crea una propia red en la cual estarán los microservicios:
```
networks:
  app-network:
    driver: bridge
```
Después, se especifica servicio por servicio.

- mongo:

MongoDB es un programa de base de datos orientado a documentos multiplataforma gratuito y de código abierto. Clasificado como un programa de base de datos NoSQL, MongoDB utiliza documentos similares a JSON con esquemas. MongoDB es desarrollado por MongoDB Inc., y se publica bajo una combinación de la Licencia pública del lado del servidor y la Licencia de Apache.

Para iniciar una instancia de servidor mongo, se utiliza una imagen mongo, donde se le especifica como etiqueta la versión de MongoDB que se va a utilizar: `image: mongo:4.2.6`

Después, se mapea el puerto 27017 del host al puerto 27017 del contenedor: `ports: -27017:27017`.
```
mongo:
  container_name: mongo
  image: mongo:4.2.6
  ports:
    - 27017:27017
  nettworks: 
    - app-network
```

- rest-api:

Como el entorno del API-REST se creó en un Dockerfile, se especifica en la carpeta donde se encuentra éste: `build: rest-api`

Se mapea el puerto 3000 del host al puerto 3000 del contenedor: `ports: -3000:3000`.

Se crea una dependencia con el servicio de mongo para que no se cree el api-rest antes que la base de datos: `depends_on: -mongo`
```
rest-api:
    build: rest-api
    ports: 
      - 3000:3000
    depends_on:
      - mongo
    networks:
      - app-network
```
- app-ui:

```
app-ui:
    build: app-ui
    scale: 2
    networks: 
      - app-network
    depends_on: 
      - rest-api
```

- proxy:
```
proxy:
    build: proxy
    ports:
      - 8080:8080
    depends_on: 
      - app-ui
    networks: 
      - app-network
```

### Travis CI

### Evidencias del funcionamiento

### Información construida con base en:
- https://github.com/ofstudio/docker-compose-scale-example/blob/master/docker-compose.yaml
- https://cloudbuilder.in/blogs/2017/11/26/docker-compose-nginx-nodejs/
- https://www.youtube.com/watch?v=BSKox1DEsQo
