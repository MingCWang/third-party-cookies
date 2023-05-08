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
      timeStamp,
    //   sessionTime: null
    }

    // this only tracks how much time user spend on each page
    // if (visit) {
    //     const startTime = moment(req.session.created_At, 'MMMM Do YYYY, h:mm:ss a');
    //     console.log(startTime)
    //     // const startTime = moment(startTimeString);
    //     req.session.tracked = true;
    //     res.on('finish', async () => {
    //         const endTime = moment();
    //         data.sessionTime =  moment.duration(endTime.diff(startTime)).humanize()// calculate session length
    //         // console.log(`Session length: ${sessionTime}ms`); // log session length to console
    //         const tracking = new Tracking(data)
    //         await tracking.save()
    //     });
    // }else{
        // save tracking info in database
        const tracking = new Tracking(data)
            
        return tracking.save()
        .then((data) => {
            res.cookie('trackingCookie', data);
        })
    // }
  }


module.exports = setTrackingInfoInCookie

