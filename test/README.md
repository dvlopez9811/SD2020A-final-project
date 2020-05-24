# Documentación de creación de pruebas

Fueron creadas las pruebas consumiendo los servicios **GET** y **POST**.
Utilizamos una librería cliente llamada superagent, statusCode que contiene un enumerador de los principales códigos de respuesta HTTP y chai que es una librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript.


```javascript
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
```

Se realizaron tres pruebas para verificar el funcionamiento exitoso de la aplicación 

## 1. Prueba consumiendo servicio GET del frontend

En esta prueba se verifica que el servidor 

```javascript
it('Consume GET Front Service', async () => {
    const response = await agent.get('http://localhost:8080/');
    
    expect(response.status).to.equal(statusCode.OK);
    expect(response.type).to.equal('text/html');
  });
  ```
## 2. Prueba consumiendo servicio POST del backend

```javascript
it('Consume POST Back Service with query parameters', async () => {
    const response = await agent.post('http://localhost:3000/add')
    .query(query);

    expect(response.status).to.equal(statusCode.OK);
  });
```
## 3. Prueba consumiendo servicio GET del back

```javascript
it('Consume GET Back Service', async () => {
    const response = await agent.get('http://localhost:3000/');

    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.not.equal('');
    expect(response.body[0].name).to.equal(query.name);
  });
  ```
