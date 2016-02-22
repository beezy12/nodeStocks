'use strict';

const express = require('express');
const router = express.Router();
const quotes = require('../controllers/getQuotesCtrl');

router.get('/', quotes.landing);
router.get('/quotes', quotes.search);
router.post('/quotes', quotes.getQuotes);



module.exports = router;
