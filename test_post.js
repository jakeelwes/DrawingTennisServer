var request = require('request-promise')

request.post(
  'http://nodesaveserve.herokuapp.com/save',
  {data: 'some data'}
).then(console.log).catch(console.log)
