
// this next route is also middleware that modifies the
// req and res objects for later routes to access.
// First, it checks the session variable: req.session
// if it has a username then it means the user has logged in
// and it can send the username and user object to the views
// via res.locals.  It also adds the user to req.user
// so it can be accessed in two ways: res.locals.user or req.user
// if the user hasn't logged in (or has logged out),
// it sets the user and username to null just to be safe
//
function userVariableSetup(req,res,next){
    if (req.session.username) {
      res.locals.loggedIn = true
      res.locals.username = req.session.username
      res.locals.user = req.session.user
      req.user = req.session.user
    } else {
      res.locals.loggedIn = false
      res.locals.username = null
      res.locals.user = null
      req.user = null
    }
    next()
  }

module.exports = userVariableSetup