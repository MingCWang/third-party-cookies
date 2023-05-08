
/* **************************************** */
/* middleware imports  */
/* **************************************** */
const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const layouts = require('express-ejs-layouts')
const isLoggedIn = require('./middlewares/check-login')
const userVariableSetup = require('./middlewares/session-variable-setup')
const session = require('./middlewares/session')
// const setTrackingInfoInCookie = require('./middlewares/tracking-cookies')

const app = express();
const thirdPartyApp = express();

/* **************************************** */
/*  Connecting to a Mongo Database Server   */
/* **************************************** */
const db = require('./config/db')

/* **************************************** */
/*  import routes  */
/* **************************************** */
const indexRouter = require('./routes/index');
const usersAuthRouter = require('./routes/user-auth');

const sendThirdPartyCookieRouter = require('./routes/third-party-index');

const cookieManagerRouter = require('./routes/cookie-manager');
/* **************************************** */
/* Enable sessions and storing session data in the database */
/* **************************************** */
app.use(session);

/* **************************************** */
/* setting up application*/
/* **************************************** */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




thirdPartyApp.set('views', path.join(__dirname, 'views'));
thirdPartyApp.set('view engine', 'ejs');

/* application routes and middlewares */
/* **************************************** */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(userVariableSetup)



app.use(layouts)

app.use(cookieManagerRouter);
app.use(usersAuthRouter);
app.use('/',indexRouter);
app.use(cors({
  credentials: true, 
  origin: 'http://localhost:4000'
}))

app.get('/test', isLoggedIn, (req,res, next) => {
  console.log('authenticated');
  next()
})


thirdPartyApp.use(logger('dev'));
thirdPartyApp.use(express.static(path.join(__dirname, 'public')));
thirdPartyApp.use(cookieParser());

thirdPartyApp.use(cors({credentials: true, origin: 'http://localhost:3001'}));

thirdPartyApp.get('/', (req, res, next) => {
  res.locals.cookieSent = false;
  res.render('third-party-index');
});
thirdPartyApp.use(sendThirdPartyCookieRouter);


/* **************************************** */
/*  error handling */
/* **************************************** */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  thirdPartyApp,
  app
}