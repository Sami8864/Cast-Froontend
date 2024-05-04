const {
    messaging,
    HttpsError,
  } = require('./admin')
  
  // data: { token: string, subscribe: bool  }
  module.exports = async (data, context) => {
    // Validate the data
  
    try {
      if (data.subscribe) {
        const response = await messaging.subscribeToTopic(data.token, 'brochures')
  
        console.log('User subscription successful', { token: data.token, response })
      } else {
        const response = await messaging.unsubscribeFromTopic(data.token, 'brochures')
  
        console.log('User unsubscription successful', { token: data.token, response })
      }
    } catch (error) {
      console.error(`User ${data.subscribe ? '' : 'un'}subscription failed`, error)
      throw new HttpsError('internal', 'Something went wrong :(')
    }
  }