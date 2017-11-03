var express = require('express');
var router = express.Router();

var title = { title: 'Power Monitoring System...' };

/* GET Index page. */
router.get('/', function(req, res, next) {
    res.render('index',  title);
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
    res.render('home', title);
});
module.exports = router;
