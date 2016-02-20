'use strict';

// get dependecies

const express = require('express');
const app = express();
// this will parse the form data into an object
const bodyParser = require('body-parser');
// ./routes/  this will automatically look for index if you don't specify a different route
const stocks = require('./routes/stocks');
const path = require('path');
// set port number to variable PORT because Heroku can't read a port number
const PORT = process.env.PORT || 3000;


// MIDDLEWARE

// this says we are going to be using jade, so when we render views use jade
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

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

// load all routes. this needs to be below the middleware, like bodyParser, because if it hits a route first then bodyParser won't fire.
app.use(stocks);




// this sets up the server
app.listen(PORT, () => {
	console.log('hear ya servin');
});




/* to-do list:
make modal pop up, askin for stock quantities
setup and require mongoose
setup server
setup db model
*/















