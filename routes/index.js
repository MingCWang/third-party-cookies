const express = require('express');
const router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.locals.session = JSON.stringify(req.session, null, 2);
  res.locals.cookies = JSON.stringify(req.cookies, null, 2);

  res.render('index', { title: 'Third Party Cookies Demonstartion'});
});


module.exports = router;
