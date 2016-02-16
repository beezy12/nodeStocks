'use strict';


const express = require('express');
const router = express.Router();


const defaultRoute = require('./default');
const portRoute = require('./portfolio');
const quoteRoute = require('./quotes');


// load routes in order of need
// .use is a middleware function
router.use(defaultRoute);
router.use(portRoute);
router.use(quoteRoute);







module.exports = router;
