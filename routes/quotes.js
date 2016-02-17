'use strict';

const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/quotes', (req, res) => {
	res.render('quotes');


});

router.post('/quotes', (req, res) => {
	// console.log('------>', req.body.name);
	const stock = req.body.name;
	console.log("************", stock);
	const url = `http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${stock}`;
	request.get(url, (err, response, body) => {
		if(err) throw err;

		body = JSON.parse(body);

		res.render('quotes', {
			name: body.Name,
			symbol: body.Symbol,
			price: body.LastPrice
		});

		console.log('res body', body);
		res.end();
	});
});



module.exports = router;
