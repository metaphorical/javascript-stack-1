"use strict"

const React = require('react');
const Backbone = require('backbone');
const searchPage = require('./searchPage.jsx');


module.exports = React.createClass({
    componentDidMount() {
    },
    render() {
        return searchPage(this);
    }
});
