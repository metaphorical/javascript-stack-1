"use strict";

const React = require('react');
const Backbone = require('backbone');

const actions = require('../../router/actions.js');

const homePage = require('./home.jsx');

//setup client side router
if (process.env.APP_ENV === 'browser') {
    const Router = require('../../router');
    window.quantum = window.quantum || {};
    window.quantum.router = new Router();
}

module.exports = React.createClass({
    componentDidMount() {
        Backbone.history.start({
            pushState: true
        });
    },
    componentWillMount() {
        this.actions = actions;
        if (process.env.APP_ENV === 'browser') {
            quantum.router.on( 'route:search', this.actions.Search );
            quantum.router.on( 'route:detail', this.actions.Detail );
            // quantum.router.on( 'route:home', this.actions.Home );
        }
    },
    render() {
        return homePage(this);
    }
});
