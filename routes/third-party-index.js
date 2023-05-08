const express = require('express');
const router = express.Router();

router.get('/sendThirdPartyCookie', (req, res, next) => {
    // after the request is sent from the first party website, this route will be called and the cookie will be set
    data = 'third-party-cookie'
    console.log("cookie sent")
    // this sets the cookie on the first party website
    res.cookie('third-party-cookie', data, { sameSite: 'lax', domain: 'localhost', path: '/' });
    res.locals.cookieSent = true;

    res.render('third-party-index', { data: data });
})

module.exports = router;