/* **************************************** */
/*  server set up  */
/* **************************************** */
// const port = 443;
const port = 4000;
const express = require('express');
const app = express();
const path = require('path');
// Import builtin NodeJS modules to instantiate the service
const https = require('https');
const fs = require('fs');

const server = https.createServer(  {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app)

server.listen(port, () => {
  // console.dir('Server running on https://20.84.83.100')
  console.dir('Server running on https://localhost:4000')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
/* **************************************** */
/*  routes import  */
/* **************************************** */
const sendThirdPartyCookieRouter = require('./routes/send-third-party-cookie');
/* **************************************** */
/*  middleware  */
/* **************************************** */
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(cookieParser());
app.use(cors({
  credentials: true, 
  origin: true,
  preflightContinue: true,
}))
// indicate to the browser that it's safe to allow cross-origin requests to be made to this server.
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
app.use((req, res, next) => {
  if(!res.locals.cookieSent){
    res.locals.cookieSent = false;
  }
  next();
})
/* **************************************** */
/*  routes  */
/* **************************************** */
app.use(sendThirdPartyCookieRouter);
app.get('/', (req, res) => {

    // for(let cookie in req.cookies){
    //   // console.log(req.cookies[cookie])
    //   if(cookie == 'third-party-cookie'){
    //     const jsonObj = JSON.parse(req.cookies[cookie])
    //     cookieContent = JSON.stringify(jsonObj, null, 2);
    //   }else{

    //   }
    // }
    res.render('index');
})
  
