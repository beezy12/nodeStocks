'use strict';

const express = require('express');
const router = express.Router();

router.get('/portfolio', (req, res) => {
	res.send('chik out dis pertferlio');
});




module.exports = router;
