/**
 * Initial app bootstraping
 */
var path = require('path');
var express = require('express');
var app = express();
var compression = require('compression');


//compress compressable
app.use(compression({
    level: -1
}));

var bodyParser = require('body-parser');


// Setting up glopal scope methods
// recommended: just logger, metrics and config
global.quantum = {}; // Namespace
global.quantum.logger = require('./plugins/logger.js');


app.use(bodyParser.text({ type: 'text/*' }));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/client/templates'));

app.use(express.static('public'));


module.exports = app;
