var React = require('react');
var ReactDOM = require('react-dom');
var falcor = require('falcor');
var HttpDataSource = require('falcor-http-datasource');

var components = require('../../components');

//JSON model points to falcor router data source set in server.js
// This is virtual JSON file that actually executes Falcor JSON graph paths and returns data
var model = new falcor.Model({source: new HttpDataSource('/model.json')});

//Call the search and return json that we need
model.
    //We put a path into get... make sure it is closed (contains end points (leafs of a branch or whatever you want to call it)
    //because in other case it is going to give you a pain of several requests for the same data.
    get("search['star wars']items[0..3]['Title', 'Poster']").
    then(function(result) {
        console.log(JSON.stringify(result, null, 4));
    });

ReactDOM.render(React.createElement(components.Search), window.document.getElementById('App'));