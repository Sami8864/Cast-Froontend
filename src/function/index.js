
const functions = require('firebase-functions')

const subscribeNotifications = require('./subscribeNotifications')

exports.subscribeNotifications = functions.https.onCall(subscribeNotifications)