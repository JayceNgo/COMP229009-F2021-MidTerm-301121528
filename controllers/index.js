/* Filename: index.js
Student's name : Ngo Tran Manh Hiep.
Student ID: 301121528.
Web app name: http://localhost:3000
Date: 26nd Oct 2021 */


exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
