'use strict';

const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/quotes', (req, res) => {
	res.render('quotes');


});

router.post('/quotes', (req, res) => {
	console.log('------>', req.body.name);
	const stock = req.body.name;
	const url = `http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${stock}`;
	request.get(url, (err, response, body) => {
		if(err) throw err;

		res.render('quotes', {
			name: body.name
		});

		console.log('res body', body);
		res.end();
	});
});



module.exports = router;
