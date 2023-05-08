/* **************************************** */
/*  server set up  */
/* **************************************** */
const port = 4000
const express = require('express');
const app = express();
const path = require('path');

app.listen(port, '0.0.0.0', () => {
    console.log(`third party website listening on port ${port}`)
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

/* **************************************** */
/*  routes  */
/* **************************************** */
app.use(sendThirdPartyCookieRouter);
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.get('/', (req, res) => {
    res.locals.cookieSent = false;
    res.render('index');
  })
  
