'use strict';

const express = require('express');
const router = express.Router();


router.get('/default', (req, res) => {
	res.send('im workin heeeeeeeere');
});



module.exports = router;
