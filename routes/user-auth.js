/*
  auth.js uses bcrypt and salt to encode passwords ...

  This router defines the following routes
  /signin (post)
  /login (get and post)
  /logout (get)

  When the user logs in or signs in, 
  it adds their user name and user object to the req.session for use in the app.js controller
  and it sets the res.locals properties for use in the view
  res.locals.loggedIn
  res.local.username
  res.locals.user
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/User')
const isLoggedIn = require('../middlewares/check-login');


router.get('/login', (req,res) => {
  res.locals.loginError = null
  res.render('login')
})

router.get('/signup', (req,res) => {
  res.locals.signupError = null
  res.render('signup')
})

// this handles the login form data
// it checks gets the username and passphrase from the form
// then it looks up the user with that username (if any)
// the user object stores a heavily encrypted version of the passphrase
// if the passphrase from the form has the same encryption, then
// the user has been authenticated
router.post('/login',
  async (req,res,next) => {
    try {
      const {username,passphrase} = req.body
      const user = await User.findOne({username:username})
      if(!user){
        res.locals.loginError = 'user does not exist'
        res.render('login')
      }else{
        res.locals.loginError = null
        const isMatch = await bcrypt.compare(passphrase,user.passphrase);
        if (isMatch) {
          req.session.username = username //req.body
          req.session.user = user
          res.redirect('/')
        } else {
          res.locals.loginError = 'incorrect username or passphrase '
          req.session.username = null
          req.session.user = null
          res.render('login')
        }
      }
     
    }catch(e){
      next(e)
    }
  })

// when a user signs up it encrypts their password
// with multiple salted rounds (look it up!)
// and if the username has not already been claimed
// it adds them to the User model and redirects to route
// as an authenticated user.
router.post('/signup',
  async (req,res,next) =>{
    try {
      // here we use destructuring to get fields from req.body
      const {username,passphrase,passphrase2} = req.body
      if (passphrase != passphrase2){
        res.redirect('/login')
      }else {
        const encrypted = await bcrypt.hash(passphrase, saltRounds);

        // check to make sure that username is not already taken!!
        const duplicates = await User.find({username})
        
        if (duplicates.length>0){
          res.locals.signupError = 'username has already been taken, please go back and try another username'
          res.render('signup')
        }else {
          // the username has not been taken so create a new user and store it in the database
          const user = new User(
            {username:username,
             passphrase:encrypted,
            })
          
          await user.save()
          res.locals.signupError = null // clear the error message
          req.session.username = user.username
          req.session.user = user
          res.redirect('/')
        }
      }
    }catch(e){
      next(e)
    }
  })

router.get('/logout', (req,res) => {
  req.session.destroy()
  res.redirect('/');
})



module.exports = router;