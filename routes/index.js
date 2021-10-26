/* Filename: index.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Web app name: http://localhost:3000
Date: 26nd Oct 2021 */

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
