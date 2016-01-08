"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');

const actions = require('../../router/actions.js');

//setup client side router
const Router = require('../../router');
window.quantum = window.quantum || {};
window.quantum.router = new Router();

quantum.router.on( 'route:search', actions.Search );
quantum.router.on( 'route:detail', actions.Detail );
quantum.router.on( 'route:home', actions.Home );

//start history(and detect what to attach)
Backbone.history.start({
    pushState: true
});

/*
    With this setup when we do server side rendering and start history, JS will detect what is rendered (or should be rendered)
    and attach views. 
*/
