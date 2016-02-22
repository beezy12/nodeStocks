'use strict';

const mongoose = require('mongoose');


module.exports = mongoose.model('storeStocks',
	mongoose.Schema({
		companyName: String,
		companySymbol: String,
		stockQuantity: Number
	})
);
