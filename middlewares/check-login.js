
function isLoggedIn(req, res, next) {
    "if they are logged in, continue; otherwise redirect to /login "
    if (res.locals.loggedIn) {
      next();
    } else {
      res.redirect("/login");
    }
  }

module.exports = isLoggedIn