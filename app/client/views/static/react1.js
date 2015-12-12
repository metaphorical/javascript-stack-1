const React = require('react');
const ReactDOM = require('react-dom');

/*
 Just react render test with "hardcoded-hardcoded" data
 (in oppose to next step which is hardcoded in falcor but dynamically loaded into react
 */

//Mock data
const mockRecipes = [
    {
        key: 0,
        name: "Chicken, good!!! (in Mila Jovovic voice)",
        instructions: "add chickpeas",
        ingredients: [
            {
                name: 'chickpeas',
                description: 'common arabic kind of dry pea like thingy'
            },
            {
                name: 'chicken breast',
                description: 'best part of chicken'
            }
        ],
        authors: {$type: 'atom', value: ['Rastko']}
    },
    {
        key: 1,
        name: "You pig",
        instructions: "also add chickpeas",
        ingredients: [
            {
                name: 'chickpeas',
                description: 'common arabic kind of dry pea like thingy'
            },
            {
                name: 'pork',
                description: "it's a pig meat..."
            }
        ],
        authors: {$type: 'atom', value: ['Rastko']}
    }
];



const App = React.createClass({
    render() {
        return (
            <div>
                <RecipeList recipes = {mockRecipes} />
            </div>
        );
    }
});

const RecipeList = new React.createClass({
    render() {
        return (

            <div>
                { this.props.recipes.map(recipe => {
                    return (
                        //using spread operator to push properties of a recipe as properties of component
                        <Recipe {...recipe} />
                    );
                })}
            </div>

        );
    }
});

const Recipe = new React.createClass({
    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <p> {this.props.instructions} </p>
                <p> {JSON.stringify(this.props.ingredients)} </p>
            </div>
        )
    }
});

ReactDOM.render(React.createElement(App), window.document.getElementById('app'));