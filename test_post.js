var request = require('request-promise')

request.post(
  'http://nodesaveserve.herokuapp.com/save',
  'some data'
).then(console.log).catch(console.log)
