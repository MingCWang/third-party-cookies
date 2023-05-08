const express = require('express');
const router = express.Router();

// Route handler that deletes the cookie with the name passed in the query string
router.post('/deleteCookie', (req, res) => {
    const cookieName = req.query.cookieName;
    console.log(req.query)
    console.log(req.cookies[cookieName])

    // check if the cookie exists
    if (req.cookies[cookieName]){
        res.clearCookie(cookieName);
        res.locals.cookieDeleted = true;
        console.log('cookie deleted')
    }else{
        console.log('cookie not found')
    }

    res.redirect('/');
   

    
})

module.exports = router;