var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongodb;
//mongodb://localhost:27017/sample1
//mongodb://rupesh:rupesh1@ds027335.mongolab.com:27335/heroku_1x6mqtdt
// MongoClient.connect('mongodb://rupesh:rupesh1@ds027335.mongolab.com:27335/heroku_1x6mqtdt', function(err, db) {
  // if (err) {
    // throw err;
  // }
  // mongodb = db;
// });
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 4000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
app.get('/users', function(req, res) {
   res.json({ message: 'hooray! welcome to our api!' }); 
    // mongodb.collection('usercollection').find().toArray(function(err, result) {
    // if (err) {
      // throw err;
    // }
    // res.json({ users: result}); 
  // });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});