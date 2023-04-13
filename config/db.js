
// process.env.MONGODB_URI ||
const mongodb_URI =  'mongodb://127.0.0.1:27017/cookie-demo';

const mongoose = require( 'mongoose' );

mongoose.connect(mongodb_URI);

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!!!")
});

module.exports = db