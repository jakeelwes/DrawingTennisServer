// set up server
var express = require('express')
var app = express()
var body_parser = require('body-parser')

var mongoose = require ("mongoose");

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://jakeelwes:P455w0rd@ds061374.mongolab.com:61374/heroku_csdn2nft';

var theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

var userSchema = new mongoose.Schema({
    date: String,
    index: String,
    data: String
});

var SVGdata = mongoose.model('a', userSchema);

app.use(body_parser.json())
var canvasdata = []

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  next()
})



app.get('/serve', function (req, res) {

  SVGdata.find({}, function (err, data){
    res.send(data);
  })

  // res.send(canvasdata)
})

app.post('/save', function (req, res) {
  var svg = new SVGdata(req.body)
  svg.save(function (err) {if (err) console.log ('Error on save!')});

  // canvasdata.push(req.body)
  console.log('req.body', req.body, 'canvasdata', canvasdata)
  res.sendStatus(200)
})

// app.get('/save/:data', function (req, res) {
//   canvasdata = req.params.data
//   res.sendStatus(200)
// })

// start the server
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})
