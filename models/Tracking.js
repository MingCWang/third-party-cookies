const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var TrackingSchema = Schema( {
    reqMethod: String,
    trackingID: String,
    ipAddress: String,
    lastVisitURL: String,
    timeStamp: String,
    sessionTime: String
} );

module.exports = mongoose.model( 'Tracking', TrackingSchema );