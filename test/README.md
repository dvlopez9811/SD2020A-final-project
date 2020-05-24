# Documentación de creación de pruebas

Fueron creadas las pruebas consumiendo los servicios **GET** y **POST**.
Utilizamos una librería cliente llamada superagent, statusCode que contiene un enumerador de los principales códigos de respuesta HTTP y chai que es una librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript.


```javascript
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
```

Se realizaron tres pruebas para verificar el funcionamiento exitoso de la aplicación 

## 1. Prueba consumiendo servicio GET del front

```javascript
it('Consume GET Front Service', async () => {
    const response = await agent.get('http://localhost:8080/');
    
    expect(response.status).to.equal(statusCode.OK);
    expect(response.type).to.equal('text/html');
  });
  ```
