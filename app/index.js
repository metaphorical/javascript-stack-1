/**
 * Initial app bootstraping
 */

var express = require('express');
var app = express();

// Setting up glopal scope methods
// recommended: just logger, metrics and config
global.quantum = {}; // Namespace
global.quantum.logger = require('./plugins/logger.js');


module.exports = app;
