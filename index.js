// set up server
var express = require('express')
var app = express()
var body_parser = require('body-parser')

app.use(body_parser.text())
var canvasdata = []

// set up routes
app.get('/serve', function (req, res) {
  res.send(canvasdata)


  // an object counter

})

app.post('/save', function (req, res) {
  canvasdata.push(req.body)
  console.log('canvasdata', canvasdata)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

  res.sendStatus(200)

  // acce

})

app.get('/save/:data', function (req, res) {
  canvasdata = req.params.data
  res.sendStatus(200)
})

// start the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})
