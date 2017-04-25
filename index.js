var request = require('request')

module.exports = function (context, myBlob) {
  request({
    url: 'https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories&language=en',
    method: 'POST',
    body: myBlob,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env['OcpApimSubscriptionKey'],
      'Content-Type': 'application/octet-stream'
    }
  }, (error, response, body) => {
    if (error) {
      context.log('Error sending message: ', error)
      context.done()
    } else {
      context.log('Categories: ', body)
      context.done()
    }
  })
}
