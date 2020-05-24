const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connecting to db 
var connectWithRetry = function() {
    return mongoose.connect('mongodb://mongo:27017/ourdb', { 
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
            setTimeout(connectWithRetry, 1000);
        }
    })
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));
};
connectWithRetry();

//importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
