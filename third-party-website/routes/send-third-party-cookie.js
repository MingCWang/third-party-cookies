const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/sendThirdPartyCookie', (req, res, next) => {
    // after the request is sent from the first party website, this route will be called and the cookie will be set
    const trackingID = req.cookies.trackingCookie?.trackingID || Math.random().toString(36).substring(2);

    const data = {
        message: 'I\'m tracking you now',
        ipAddress: req.ip,
        trackingID: trackingID,
    }
    // this sets the cookie on the first party website 
    try{
        if (!req.cookies.hasOwnProperty("third-party-cookie")){
            res.cookie('third-party-cookie', data, { SameSite: 'None', domain: 'localhost', path: '/', secure: true});
        }else{
            console.log(req.cookies);
        }
    }catch(error){
        console.log(error)
        console.log('cookie not set')
    }

    res.set('Content-Type', 'image/jpeg');
    res.sendFile(__dirname + "/mr-robot.jpeg");
    // res.render('index', { data: data, cookieSent: true});

})

module.exports = router;