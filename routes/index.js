var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  cookies = JSON.stringify(req.cookies);
  session = JSON.stringify(req.session);
  res.render('index', { title: 'Third Party Cookies Demonstartion', session: session, cookies: cookies });
});


module.exports = router;
