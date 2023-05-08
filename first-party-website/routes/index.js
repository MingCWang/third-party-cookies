const express = require('express');
const router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
  

  res.locals.session = JSON.stringify(req.session, null, 2);
  let cookies = {};
  for(let cookie in req.cookies){
    let cookieContent = JSON.stringify(req.cookies[cookie], null, 2);
    cookies[cookie] = cookieContent;
  }
  // res.locals.cookies = JSON.stringify(req.cookies, null, 2);
  res.locals.cookies = cookies;
  res.render('index', { title: 'Third Party Cookies Demonstartion'});
});


module.exports = router;
