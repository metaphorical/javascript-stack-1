"use strict"

const React = require('react');
const ReactDOM = require('react-dom');
const resultCard = require('./resultCard.jsx');

module.exports = React.createClass({
    //componentDidMount() {
    //},
    componentWillMount() {
    },
    goToDetail(e) {
        e.preventDefault();
        var imdbID = this.props.imdbID;
        var searchString = this.props.searchString;
        var params = JSON.stringify({
            imdbID: imdbID,
            searchString: searchString
        });
        console.log(params);
        if (process.env.APP_ENV === 'browser') {
            quantum.router.navigate('/detail/' + encodeURIComponent(params), { trigger:true });
        }
    },
    render() {
        return resultCard(this);
    }
});
