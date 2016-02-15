'use strict';
/* eslint-disable */

// get dependecies
const express = require('express');
// initialize app
const app = express();
const PORT = process.env.PORT || 3000;






app.get('/', (req, res) => {
	res.send('hayyyyyy')
})






// this sets up the server
app.listen(PORT, () => {
	console.log('hear ya servin');
});


