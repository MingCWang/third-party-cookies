const express = require('express');
const router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
  

  res.locals.session = JSON.stringify(req.session, null, 2);
  let cookies = {};
  let cookieContent = '';
  // format the cookies that are sent to the user 
  for(let cookie in req.cookies){
    console.log(req.cookies[cookie])

    if(cookie == 'thirdPartyCookie'){
      const jsonObj = JSON.parse(req.cookies[cookie])
      cookieContent = JSON.stringify(jsonObj, null, 2);
    }else{
      cookieContent = JSON.stringify(req.cookies[cookie], null, 2);
    }
    cookies[cookie] = cookieContent;
  }

  res.locals.cookies = cookies;
  res.render('index', { title: 'Third Party Cookies Demonstartion'});
});


module.exports = router;
