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
        this.props.detailAction({
            imdbID: imdbID,
            searchString: searchString
        });
    },
    render() {
        return resultCard(this);
    }
});
