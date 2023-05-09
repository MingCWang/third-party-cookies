/* **************************************** */
/*  server set up  */
/* **************************************** */
const port = 80;
const express = require('express');
const app = express();
const path = require('path');

app.listen(port, () => {
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
const cors = require('cors');

app.use(cors({
  credentials: true, 
  origin: true,
  preflightContinue: true,
}))
/* **************************************** */
/*  routes  */
/* **************************************** */
app.use(sendThirdPartyCookieRouter);
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.get('/', (req, res) => {
    res.locals.cookieSent = false;
    res.render('index');
  })
  
