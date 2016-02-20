'use strict';



module.exports = {
	// home here is home.jade
	landing (req, res) {
		res.render('home')
	},

	ask (req, res) {
		res.render('quotes')
	}


}
