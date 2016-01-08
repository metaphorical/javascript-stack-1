"use strict";

const React = require('react');
const homePage = require('./home.jsx');


module.exports = React.createClass({
    render() {
        return homePage(this);
    }
});
