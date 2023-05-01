const express = require('express');
const router = express.Router();

router.get('/sendThirdPartyCookie', (req, res, next) => {
    data = 'third-party-cookie'
    console.log("cookie sent")
    res.cookie('third-party-cookie', data, { sameSite: 'lax', domain: 'localhost', path: '/' });
    res.locals.cookieSent = true;

    res.render('third-party-index', { data: data });
})

module.exports = router;