"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const detailPage = require('./detail.jsx');
var movieModel = require('../../../models/movieModel.js');

module.exports = React.createClass({
    componentDidMount() {
      console.log('detail page mounted');
    },
    getInitialState() {
        return {
            'Title': this.props.Title,
            'Year': this.props.Year,
            'Poster': this.props.Poster,
            'lastSearch': this.props.Search
        }
    },
    backToSearch(e) {
        e.preventDefault();
        let searchText = this.state.lastSearch;
        console.log('last Search', searchText);
    },
    render() {
        return detailPage(this);
    }
});
