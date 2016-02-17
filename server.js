'use strict';
/* eslint  */

// get dependecies
const express = require('express');
var bodyParser = require('body-parser')

// initialize app.  app equals express.
const app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
// ./routes/  this will automatically look for index if you don't specify a different route
const routes = require('./routes/');

// set port to environment port or 3000
// set port number to variable PORT because Heroku can't read a port number
const PORT = process.env.PORT || 3000;

// this will parse the form data into an object
// const bodyParser = require('body-parser');

// this says we are going to be using jade, so when we render views use jade
app.set('view engine', 'jade');

const path = require('path');
// this is a middleware function for sass
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

// this one gives a path to anything in public that doesn't already have a path
app.use(express.static(path.join(__dirname, 'public')));
// this one gives a path to anything in views that doesn't already have a path
app.set('views', path.join(__dirname, 'views'));






// load all routes
app.use(routes);









// this sets up the server
app.listen(PORT, () => {
	console.log('hear ya servin');
});


