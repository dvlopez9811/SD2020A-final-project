## Documentación Front-End

El Front-End de la aplicación tiene dos componentes, el primero es la **vista**, la cual se encuentra desarrollada en un archivo .ejs. El segundo componente es el **servidor**, el cual se desarrolla usando nodejs, y es necesario incluir las siguientes dependencias en el archivo package.json, o mediante el comando `npm install --save <dependencies>`:

* ejs, express, superagent. 

Ahora, ¿Cómo funciona?

La **vista**, en el archivo **views/index.ejs** contiene el componente visual de nuestra aplicación, y está conformado principalmente por una entrada de texto para ingresar los datos, un botón para activar el ingreso, y una lista donde se muestran los elementos agregados.

El **servidor**, el cual escucha por el puerto **3030**, hace uso de express y superagent para recibir las solicitudes en el endpoint **'/'** mediante el método **GET** para solicitar al Back-End los datos almacenados en la base de datos. 

Asi mismo, se utiliza el método **POST** para envíar la información ingresada por el usuario en formato json.

Dentro de esta carpeta /app-ui, encontramos el archivo Dockerfile, el cual establece la configuración de construcción para el contenedor de docker:

```FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030
CMD [ "node", "app.js" ]
