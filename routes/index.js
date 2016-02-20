'use strict';


const express = require('express');
const router = express.Router();

const home = require('./home');
const portRoute = require('./portfolio');
const quoteRoute = require('./quotes');


// load routes in order of need
// .use is a middleware function
router.use(home);
router.use(portRoute);
router.use(quoteRoute);







module.exports = router;
