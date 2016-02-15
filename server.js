'use strict';
/* eslint-disable */

// get dependecies
const express = require('express');
// initialize app
const app = express();

const routes = require('./routes/');
// set port to environment port or 3000
const PORT = process.env.PORT || 3000;


// load all routes
app.use(routes);









// this sets up the server
app.listen(PORT, () => {
	console.log('hear ya servin');
});


