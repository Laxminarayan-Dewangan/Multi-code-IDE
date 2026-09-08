var express = require('express');
const { sign } = require('jsonwebtoken');
const { signup } = require('../Controllers/userController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signup",signup);

module.exports = router;
