// set up server
var express = require('express')
var app = express()
var body_parser = require('body-parser')
var ipfilter = require('express-ipfilter')

var mongoose = require ("mongoose");

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://jakeelwes:dp7948769@ds061374.mongolab.com:61374/heroku_csdn2nft';

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
    formattedDate: String,
    name: String,
    index: String,
    data: String,
    // serverDate: String

});

var ips = ['90.200.37.158'];

var SVGdata = mongoose.model('PowerUsers', userSchema);

app.use(body_parser.json({limit: '50mb'}))
app.use(ipfilter(ips));
var canvasdata = []

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  next()
})

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/serve', function (req, res) {

  SVGdata.find({}, function (err, data){
    res.send(data);
  }).sort({"date":1});

  // res.send(canvasdata)
})

app.post('/save', function (req, res) {
  var body = req.body;
  body.date = Date.now();

  var svg = new SVGdata(body)
  svg.save(function (err) {if (err) console.log ('Error on save!')});

  // canvasdata.push(req.body)
  // res.send(svg + d);
  console.log('body', body, 'canvasdata', canvasdata)
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
