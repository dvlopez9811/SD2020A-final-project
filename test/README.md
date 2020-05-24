# Documentación de creación de pruebas

Fueron creadas las pruebas consumiendo los servicios **GET** y **POST**.
Utilizamos una librería cliente llamada superagent y otra que contiene un enumerador de los principales códigos de respuesta HTTP

```javascript const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');```
