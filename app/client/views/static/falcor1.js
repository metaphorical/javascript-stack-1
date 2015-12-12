const React = require('react');
const ReactDOM = require('react-dom');

//models here are falcor models and falcor gets required there to abstract it
//for different usages I want to have for demo purposes
var model = require('../../../models/falcor_model1.js');

//@TODO: see about that other Falcor syntax for paths
//Paths are actually kind of queries

model.get("recipes[0]['name', 'instructions']").
    //Square brackets syntax for array can be given as range also - [0...5]
        then(data => {
           console.log('reduced', data);
        });

//range and ingredients
model.get("recipes[0..1].ingredients[0..2][ 'name', 'description']").
        then(data => {
           console.log('referenced values', data);
        });


//composing response by joining results of multiple "paths"
model.get("recipes[0..1].ingredients[0..2]['name', 'description']", "recipes[0..1]['name', 'instructions', 'authors']").
        then(data => {
           console.log('multiple values', data);
        });


//Preparing stuff for React demo
const App = React.createClass({
    render() {
        return (<h1>This is Falcor!!!</h1>);
    }
});

ReactDOM.render(React.createElement(App), window.document.getElementById('app'));