#!/usr/bin/env node

// Declare our dependencies
var express = require('express');
var request = require('superagent');
//var backendHost = localhost;
// Create our express app
var app = express();

// Set the view engine to use EJS as well as set the default views directory
app.set('port', 3030);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// This tells Express out of which directory to serve static assets like CSS and images
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.render('index');
  })
//module.exports = app.listen(3030);
