'use strict';

const express = require('express');
const router = express.Router();


router.get('/quotes', (req, res) => {
	res.send('getchurquotesrightjeer');
});





module.exports = router;
