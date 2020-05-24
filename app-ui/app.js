#!/usr/bin/env node

// Declare our dependencies
var express = require('express');
var request = require('superagent');
var backendHost = "rest-api";
// Create our express app
var app = express();

// Set the view engine to use EJS as well as set the default views directory
app.set('port', 3030);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// This tells Express out of which directory to serve static assets like CSS and images
app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies

app.get('/', function(req, res){
  console.log("Resolviendo solicitud")
  request
    .get('http://'+backendHost+':3000/')
    .end(function(err, data) {
      if(data==undefined){
        res.status(404).send({});
      } else {
        if(data.status == 403){
          res.send(403, '403 Forbidden');
        } else {
          var person = data.body;
          res.render('index', { person: person} );
        }
      }
    })
  })

  app.post('/add', function (req, res) {
    request
    .post('http://'+backendHost+':3000/add')
    .set('Content-Type', 'application/json')
    .query(req.body)
    .then(res.redirect('/'))
  });
    

module.exports = app.listen(3030);
