### Resumen de la aplicación

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
   * La configuración de Swagger (La instalación para ello se encuentra en el siguiente apartado).  
   * La conexion con la base de datos Mongo.  
   * Indicar la ruta donde se encuentran los endpoints.  
   * Ejecutar la aplicación.  
   
### Instalación de swagger

Para la documentación del API-REST se utilizará Swagger UI Express, este módulo permite servir documentos API generados automáticamente por swagger-ui desde express, basados ​​en un archivo swagger.json. El resultado es una documentación para su API alojada desde su servidor API a través de una ruta.

1. Instalar Swagger UI Express a través de npm y guardar la dependencia: </br>

```javascript
npm i swagger-jsdoc swagger-ui-express --save-dev
```
2. Realizar la configuración inicial en app.js

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');`
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
- https://youtu.be/apouPYPh_as
- https://www.npmjs.com/package/swagger-ui-express
