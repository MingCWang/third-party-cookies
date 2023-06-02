const moment = require('moment');
const Tracking = require('../models/Tracking');

// This middleware will set the trackingCookie in the browser that stores 
// the trackingID, ipAddress, lastVisitURL, and reqMethod in the database 
const setTrackingInfoInCookie = async (req, res) => {
    const trackingID = req.cookies.trackingCookie?.trackingID || Math.random().toString(36).substring(2);

    const ipAddress = req.ip;
    const lastVisitURL = req.originalUrl;
    const reqMethod = req.method;
    const timeStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    const data = {
      reqMethod,
      trackingID,
      ipAddress,
      lastVisitURL,
      timeStamp
    }
    const tracking = new Tracking(data)
        
    return tracking.save()
    .then((data) => {
        res.cookie('trackingCookie', data);
    })
}


module.exports = setTrackingInfoInCookie

