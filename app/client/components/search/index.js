"use strict"

const React = require('react');
const searchPage = require('./searchPage.jsx');


module.exports = React.createClass({
    componentDidMount() {
    },
    render() {
        return searchPage(this);
    }
});
