var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  	var test = db.callDb(res);
  res.render('index', { title: 'db test' });
});

module.exports = router;
