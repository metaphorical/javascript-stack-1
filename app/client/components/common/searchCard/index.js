"use strict";

const React = require('react');
const resultCard = require('./resultCard.jsx');

module.exports = React.createClass({
    //componentDidMount() {
    //},
    componentWillMount() {
    },
    goToDetail(e) {
        e.preventDefault();
        var imdbID = this.props.imdbID;
        var searchString = this.props.searchString || false;
        var detailParams = imdbID + '/' + ((searchString) ? searchString : '');

        quantum.router.navigate('/detail/' + detailParams, { trigger:true });
    },
    render() {
        return resultCard(this);
    }
});
