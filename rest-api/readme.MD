


### Instalación de swagger

Para la documentación del API-REST se utilizará Swagger UI Express, este módulo permite servir documentos API generados automáticamente por swagger-ui desde express, basados ​​en un archivo swagger.json. El resultado es una documentación para su API alojada desde su servidor API a través de una ruta.

1. Instalar Swagger UI Express a través de npm y guardar la dependencia: </br>

`npm i swagger-jsdoc swagger-ui-express --save-dev`

2. Relaizar la configuración inicial en app.js

`const swaggerUi = require('swagger-ui-express');` </br>
`const swaggerJsDoc = require('swagger-jsdoc');`

3. Configurar Swagger-UI:
```
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
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

4. Documentación de cada endpoint:




### Información construida con base en:
- https://youtu.be/apouPYPh_as
- https://www.npmjs.com/package/swagger-ui-express
