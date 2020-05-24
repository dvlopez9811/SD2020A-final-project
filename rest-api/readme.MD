## Resumen de la aplicación

Para la realización del API-REST (Backend) se necesitaron las siguientes dependencias:  
```javascript
const path = require('path');
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const mongoose = require('mongoose');
```
Seguido de esto se realizó: 
   * La configuración de Swagger (La instalación de este framework se encuentra en el siguiente apartado).  
     En el siguiente fragmento de código se puede evidenciar: la versión en la que se encuentra el endpoint, el título, una descripción, los autores del proyecto, el servidor que respondera y por último la ruta donde se encuentran todos los endpoints.  

     ```javascript
     const swaggerOptions = {
         swaggerDefinition: {
            info: {
                version: '0.0.1',
                title: "API-REST Usuarios",
                description: "API-REST para la gestión de usuarios",
                contact: {
                    name: "Coral-Quintero-Ramos-Varela"
                },
                servers: ["http://localhost:3000"]
            }
         },
         apis: ["./routes/index.js"]
     }
   
     const swaggerDocs = swaggerJsDoc(swaggerOptions);
     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
     ```
   
   * La conexión con la base de datos Mongo.  
     En el siguiente código se puede ver cómo se realiza la conexión con la base de datos y en caso de que ocurra un error, procederá a reintentar la conexión luego de cinco segundos.   
     ```javascript
     var connectWithRetry = function() {
         return mongoose.connect('mongodb://mongo:27017/ourdb', { 
        })
        .then(db => console.log('Db connected'))
        .catch(function(err) {
              console.log(err);
              if (err) {
                  console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
                  setTimeout(connectWithRetry, 5000);
              }
         });
     };
     connectWithRetry();
     ```
   * Indicar la ruta donde se encuentran los endpoints.  
     ```javascript
     const indexRoutes = require('./routes/index');
     ```
   * Ejecutar la aplicación.  
     ```javascript
     app.set('port', 3000);

     app.use(morgan('dev'));
     app.use(express.urlencoded({extended: false}));

     app.use('/', indexRoutes);

     // starting the server
     app.listen(app.get('port'), ()=>{
         console.log(`Server on port ${app.get('port')}`);
     });
     ```
## Instalación de swagger

Para la documentación del API-REST se utilizará Swagger UI Express, este módulo permite servir documentos API generados automáticamente por swagger-ui desde express, basados ​​en un archivo swagger.json. El resultado es una documentación para su API alojada desde su servidor API a través de una ruta.

1. Instalar Swagger UI Express a través de npm y guardar la dependencia: </br>

```javascript
npm i swagger-jsdoc swagger-ui-express --save-dev
```
2. Realizar la configuración inicial en app.js

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
```
3. Configurar Swagger-UI:
```javascript
 const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API-REST Distribuidos",
            description: "API-REST para el proyecto final de Sistemas Distribuidos",
            contact: {
                name: "Coral-Quintero-Ramos-Varela"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
}
```

```javascript
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
```

4. Documentación de cada endpoint:  
Una vez realizados los pasos anteriores, se procede a documentar cada endpoint. Para ello es necesario usar:  
   * Los caracteres `/** ... */` para comentar multiples lineas.  
   * La etiqueta `@swagger`  
   * El nombre del endpoint.  
   * El o los métodos de petición HTTP que se desea documentar `GET` `POST` `PUT` `DELETE`  
   * Seguido de un conjunto de etiquetas con el cual se puede formar la documentación (entre los mas relevantes para la realización de este proyecto se encuentran: `description`, `responses`, `parameters` y `requestBody`)  

A manera de ejemplo se muestra la documentación del endpoint `GET`  
```
/**
 * @swagger
 * /:
 *  get:
 *      summary: Retorna una lista de todos los usuarios
 *      description: Retorna una lista de todos los usuarios
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              definitions:
 *                 ArrayOfUsers:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *              examples:
 *                  application/json:
 *                        - id: 2333458458354
 *                          name: Job
 *                        - id: 1233345845822
 *                          name: Smith
 */
```

### Información construida con base en:
- https://mongoosejs.com/docs/
- https://youtu.be/apouPYPh_as
- https://www.npmjs.com/package/swagger-ui-express
