const express = require('express');
const router = express.Router();

router.post('/sendThirdPartyCookie', (req, res, next) => {
    // after the request is sent from the first party website, this route will be called and the cookie will be set
    data = 'third-party-cookie'
    console.log("cookie sent")
    // this sets the cookie on the first party website 
    // try{
    //     res.cookie('third-party-cookie', data, { SameSite: 'None', domain: '172.20.53.134', path: '/', secure: true});
    // }catch(error){
    //     console.log(error)
    //     console.log('cookie not set')
    // }


    res.locals.cookieSent = true;
    res.json({ message: 'I\'m tracking you now' });

    // res.render('index', { data: data });
})

module.exports = router;