'use strict';
/* eslint-disable */

// get dependecies
const express = require('express');

// initialize app.  app equals express.
const app = express();

// ./routes/  this will automatically look for index if you don't specify a different route
const routes = require('./routes/');

// set port to environment port or 3000
// set port number to variable PORT because Heroku can't read a port number
const PORT = process.env.PORT || 3000;


// load all routes
app.use(routes);









// this sets up the server
app.listen(PORT, () => {
	console.log('hear ya servin');
});


