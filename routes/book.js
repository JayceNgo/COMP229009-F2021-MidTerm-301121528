/* Filename: book.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Web app name: http://localhost:3000
Date: 26nd Oct 2021 */

var express = require('express');
var router = express.Router();

let bookController = require('../controllers/book');


let Book = require('../models/book');

// Router for lists books function
router.get('/list', bookController.bookList);

// Router for book details function
router.get('/details/:id', bookController.details);

// Routers for edit functions
router.get('/edit/:id', bookController.displayEditPage);
router.post('/edit/:id', bookController.processEditPage);

// Router for Delete function
router.get('/delete/:id', bookController.performDelete);

// Routers for Add functions
router.get('/add', bookController.displayAddPage);
router.post('/add', bookController.processAddPage);


module.exports = router;