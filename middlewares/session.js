
const mongodb_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pwdemo';

const session = require("express-session"); // to handle sessions using cookies 
var MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: mongodb_URI,
  collection: 'mySessions'
});

// Catch errors                                                                      
store.on('error', function(error) {
  console.log(error);
});


session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week                                        
  },
  store: store,
  // Boilerplate options, see:                                                       
  // * https://www.npmjs.com/package/express-session#resave                          
  // * https://www.npmjs.com/package/express-session#saveuninitialized               
  resave: true,
  saveUninitialized: true
})

module.exports = session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week                                        
  },
  store: store,
  // Boilerplate options, see:                                                       
  // * https://www.npmjs.com/package/express-session#resave                          
  // * https://www.npmjs.com/package/express-session#saveuninitialized               
  resave: true,
  saveUninitialized: true
})