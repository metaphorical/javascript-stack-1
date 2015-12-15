const React = require('react');
const resultCard = require('./resultCard.jsx');
var movieModel = require('../../../models/movieModel.js');

module.exports = React.createClass({
    componentDidMount() {
        console.log('Result Card mounted');
    },
    goToDetail(e) {
        e.preventDefault();
        var imdbID = this.props.imdbID;
        movieModel.
        get("detail['" + imdbID + "']['Title', 'Genre', 'Director', 'Plot']").
            then(function(result) {
                var detailData = result.json.detail[imdbID];
                console.log(detailData);
            });
    },
    render() {
        return resultCard(this);
    }
});
