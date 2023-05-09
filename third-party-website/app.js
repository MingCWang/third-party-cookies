/* **************************************** */
/*  server set up  */
/* **************************************** */
const port = 443;
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
  console.dir('Server running on https://20.84.83.100')
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

app.use(cookieParser());
app.use(cors({
  credentials: true, 
  origin: true,
  preflightContinue: true,
}))
/* **************************************** */
/*  routes  */
/* **************************************** */
app.use(sendThirdPartyCookieRouter);
app.get('/', (req, res) => {
    res.locals.cookieSent = false;
    res.render('index');
  })
  
