const path = require('path');
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const mongoose = require('mongoose');

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

// connecting to db 
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

//importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
