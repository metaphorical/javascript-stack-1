"use strict";

const React = require('react');
const detailPage = require('./detail.jsx');

module.exports = React.createClass({
    componentDidMount() {
      console.log('detail page mounted');
    },
    getInitialState() {
        let initialState = {};
        initialState.Title = this.props.Title || false;
        initialState.Year = this.props.Year || false;
        initialState.Poster = this.props.Poster || false;
        initialState.lastSearch = this.props.Search || false;
        initialState.Plot = this.props.Plot || false;

        return initialState;
    },
    backAction(e) {
        e.preventDefault();
        var navigateTo = this.state.lastSearch ? ("/search/" + this.state.lastSearch) : "/";
        quantum.router.navigate(navigateTo, {trigger: true});
    },
    render() {
        return detailPage(this);
    }
});
