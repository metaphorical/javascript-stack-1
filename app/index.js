/**
 * Initial app bootstraping
 */

// ES6 everywhere (remove when on node that supports all you need
// It will probably be never since
require('babel-core/register')({
    presets: ['es2015', 'react']
});

var path = require('path');
var express = require('express');
var app = express();

// Setting up glopal scope methods
// recommended: just logger, metrics and config
global.quantum = {}; // Namespace
global.quantum.logger = require('./plugins/logger.js');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/client/views'));

app.use(express.static('public'));


module.exports = app;
