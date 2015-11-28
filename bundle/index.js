const React = require('react');
const ReactDOM = require('react-dom');
const Falcor = require('falcor');


//just cached stuff (just local, no http source)
var model = new Falcor.Model({
    cache: {
        ingredientsById: {
            1: {
                name: 'chickpeas',
                description: 'common arabic kind of dry pea like thingy'
            },
            2: {
                name: 'chicken breast',
                description: 'best part of chicken'
            },
            3: {
                name: 'pork',
                description: "it's a pig meat..."
            }
        },
        recipes: [
            {
                name: "Chicken, good!!! (in Mila Jovovic voice)",
                instructions: "add chickpeas",
                ingredients: [
                    //here we say it is a reference to another part of the model, with direct address to it
                    {$type: 'ref', value: ["ingredientsById", 2]},
                    {$type: 'ref', value: ["ingredientsById", 1]}
                ]
            },
            {
                name: "You pig",
                instructions: "also add chickpeas",
                ingredients: [
                    {$type: 'ref', value: ["ingredientsById", 3]},
                    {$type: 'ref', value: ["ingredientsById", 1]}
                ]
            }
        ]
    }
});

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
model.get("recipes[0..1].ingredients[0..2]['name', 'description']", "recipes[0..1]['name', 'instructions']").
        then(data => {
           console.log('multiple values', data);
        });


//Preparing stuff for React demo
const App = React.createClass({
    render() {
        return (<h1>This is h1</h1>);
    }
});

ReactDOM.render(React.createElement(App), window.document.getElementById('app'));