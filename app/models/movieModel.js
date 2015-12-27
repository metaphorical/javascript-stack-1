const falcor = require('falcor');
var HttpDataSource = require('falcor-http-datasource');


//JSON model points to falcor router data source set in server.js
// This is virtual JSON file that actually executes Falcor JSON graph paths and returns data
var model = new falcor.Model({
    source: new HttpDataSource('/model.json')
});


module.exports = model;