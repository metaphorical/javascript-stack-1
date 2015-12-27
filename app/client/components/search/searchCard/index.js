const React = require('react');
const ReactDOM = require('react-dom');
const resultCard = require('./resultCard.jsx');
const detail = require('../../detail');
var movieModel = require('../../../../models/movieModel.js');

module.exports = React.createClass({
    componentDidMount() {
        console.log('Result Card mounted');
    },
    goToDetail(e) {
        e.preventDefault();
        var imdbID = this.props.imdbID;
        var searchString = this.props.searchString;
        var detailComponent = null;
        /*
            On click we fetch search results and from them we fetch data we already got about result on which we
            want to display details on
         */
        movieModel.
            get("search['" + searchString + "']items[0..9]['Title', 'Poster', 'Year', 'imdbID']").
                then((response) => {
                    /*
                        We display basic stuff waiting for the next call to get us more data
                    */
                    var results = response.json.search[searchString].items;
                    var resultsById = {};
                    Object.keys(results).map((key) => {
                        resultsById[results[key].imdbID] = results[key];
                    });

                    detailComponent = ReactDOM.render(React.createElement(detail, resultsById[imdbID]), window.document.getElementById('App'));
                });

        movieModel.
            get("detail['" + imdbID + "']['Title', 'Genre', 'Director', 'Plot']").
                then(function(result) {
                    var detailData = result.json.detail[imdbID];
                    /*
                        We hit interface with more data
                     */
                    detailComponent.setState(detailData);
                });
    },
    render() {
        return resultCard(this);
    }
});
