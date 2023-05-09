const express = require('express');
const router = express.Router();

router.get('/sendThirdPartyCookie', (req, res, next) => {
    // after the request is sent from the first party website, this route will be called and the cookie will be set
    data = 'third-party-cookie'
    console.log("cookie sent")
    // this sets the cookie on the first party website 
    res.cookie('third-party-cookie', data, { sameSite: 'lax', domain: '172.20.53.134', path: '/' });
    res.locals.cookieSent = true;
    console.log('cookies', req.cookies)

    res.render('index', { data: data });
})

module.exports = router;