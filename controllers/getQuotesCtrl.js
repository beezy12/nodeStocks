'use strict';

const request = require('request');
// const StoreStocks = require('../models/storeStocks.js')




module.exports = {
	// home here is home.jade
	landing (req, res) {
		res.render('home')
	},

	search (req, res) {
		res.render('quotes')
	},

	getQuotes (req, res) {
		// name here comes from the input field in the jade template. this stock variable gets added into the url below
		const stock = req.body.name;
		const url = `http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${stock}`;

		// if you don't put a .get on the end of the request, it will still do a get request
		request.get(url, (err, response, body) => {
			if(err) throw err;

			// body came back as a string, so I turned it into a json object
			body = JSON.parse(body);
			// console.log(body)
			res.render('quotes', {
				name: body.Name,
				symbol: body.Symbol,
				price: body.LastPrice
			});

			res.end();
		});
	}


};










