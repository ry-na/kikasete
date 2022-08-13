var express = require('express');

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
module.exports = router;
