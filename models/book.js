/* Filename: book.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Web app name: http://localhost:3000
Date: 26nd Oct 2021 */

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "book"
    }
);

module.exports = mongoose.model('Book', bookModel);