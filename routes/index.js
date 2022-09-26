var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/top', function(req, res, next) {
  res.render('top');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

module.exports = router;
