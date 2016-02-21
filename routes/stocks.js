'use strict';

const express = require('express');
const router = express.Router();
const quotes = require('../controllers/quotes');

router.get('/', quotes.landing);
router.get('/quotes', quotes.search);
router.post('/quotes', quotes.getStocks);




module.exports = router;
