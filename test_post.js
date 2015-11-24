var request = require('request-promise')

var r = {
  method: 'POST',
  uri: 'http://localhost:44555/save',
  body: {data: 'some cool data', hat: 'fedora'},
  json: true
}

request(r)
  .then(console.log)
  .catch(console.log)
