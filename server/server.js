// This file creates our server and calls config.js to configure
// all middleware and routing.
var express = require('express');
var app = express();
require('./config.js')(app,express);
require('./routes.js')(app);

module.exports = app;


