const express = require('express');
const router = express.Router();

router.post('/sendThirdPartyCookie', (req, res, next) => {
    // after the request is sent from the first party website, this route will be called and the cookie will be set

    // this sets the cookie on the first party website 
    // try{
    //     res.cookie('third-party-cookie', data, { SameSite: 'None', domain: '172.20.53.134', path: '/', secure: true});
    // }catch(error){
    //     console.log(error)
    //     console.log('cookie not set')
    // }
    const trackingID = req.cookies.trackingCookie?.trackingID || Math.random().toString(36).substring(2);

    const data = {
        message: 'I\'m tracking you now',
        ipAddress: req.ip,
        trackingID: trackingID,
    }
    res.json(data);

    // res.render('index', { data: data });
})

module.exports = router;