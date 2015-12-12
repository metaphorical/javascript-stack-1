const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');


var model = require('../../../models/falcor_model1.js');


const App = React.createClass({
    render() {
        /*
            Notice here that we are not passing any data to RecipeList
            this is a whole point since data is going to be internally requested from falcor and
            remembered in state of the component
         */
        return (
            <div>
                <RecipeList />
            </div>
        );
    }
});

const RecipeList = new React.createClass({
    getInitialState() {
        return {
            recipes: []
        }
    },
    /* componentDidMount() -  React lifecycle method
     This is where we will bring all requirements of all separate modules together in a query that requests data from falcor
     model is falcor model
     This is top-down approach where you set requirements in all the components and then compose query that actually asks components
     what they need
    */
    componentDidMount() {
        //here goes long query (ingredients are separated, remember?)
        model.get(
            ['recipes', { from: 0, to: 9 }, Recipe.queries.recipe()],
            ['recipes', { from: 0, to: 9 }, 'ingredients', { from: 0, to: 9 }, Recipe.queries.ingredients()]
        )
        .then( data => {
                this.setState({
                    //Falcor is actually keeping keys with ordering and pagination in mind,
                    //so we want to strip keys and make it an array to map
                    recipes: _.values(data.json.recipes)
                });
            });
    },
    render() {
        return (

            /*
             Notice here, change from react1, we are not calling a prop (which is externally bound data)
             but a state that is internal state (data that component holds
             - in this case component that holds all other components
             */

            <div>

                { this.state.recipes.map(recipe => {
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
    statics: {
      queries: {
          recipe() {
              return _.union( Name.queries.getData(), Instructions.queries.getData() );
          },
          // building this so we do not go directly to component to see what it needs but just use query for it
          // allowing change in component to just propagate here.
          ingredients() {
              return Ingredients.queries.getData();
          }
      }
    },
    render() {
        return (
            <div>
                <Name name = {this.props.name} />
                <Instructions instructions = {this.props.instructions} />
                <Ingredients ingredients = {this.props.ingredients} />
            </div>
        )
    }
});

const Name = React.createClass({
    statics: {
        queries: {
            getData() {
                return ['name'];
            }
        }
    },
   render() {
       return (
           <h1> {this.props.name} </h1>
       )
   }
});

const Instructions = React.createClass({
    statics: {
        queries: {
            getData() {
                return ['instructions'];
            }
        }
    },
   render() {
       return (
           <p> {this.props.instructions} </p>
       );
   }
});

const Ingredients = React.createClass({
    statics: {
        queries: {
            getData() {
                return ['name', 'description'];
            }
        }
    },
   render() {
       return (
           <p> Ingredients: {JSON.stringify(this.props.ingredients)} </p>
       );
   }
});

ReactDOM.render(React.createElement(App), window.document.getElementById('app'));