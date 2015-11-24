// set up server
var express = require('express')
var app = express()
var body_parser = require('body-parser')

app.use(body_parser.json())
var canvasdata = []

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  next()
})

// set up routes
app.get('/serve', function (req, res) {
  res.send(canvasdata)
})

app.post('/save', function (req, res) {
  canvasdata.push(req.body)
  console.log('req.body', req.body, 'canvasdata', canvasdata)
  res.sendStatus(200)
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
