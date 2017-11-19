//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// ------------------------------ //

app.post("/api/new", function(req, res) {
  var newcharacter = req.body;

  console.log(newcharacter);

  friends.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});