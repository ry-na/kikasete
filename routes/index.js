var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController');
const mypageController = require('../controllers/mypageController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', registerController.index);
router.get('/mypage', mypageController.index);
router.get('/top', function(req, res, next) {
  res.render('top');
});

module.exports = router;
