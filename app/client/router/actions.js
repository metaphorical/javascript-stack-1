'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const homePage = require('../components/home');
const searchPage = require('../components/search');
const detailPage = require('../components/detail');

var Model = require('../../models/movieModel.js');


module.exports = {
    Home: () => {
        console.log('home');
        ReactDOM.render(React.createElement(homePage, {}), window.document.getElementById('App'));
    },
    Search: (searchString) => {
        Model.search(searchString).then((response) => {
            ReactDOM.render(React.createElement(searchPage, response), window.document.getElementById('App'));
        });
    },

    Detail: (imdbID, searchString) => {
        var detailComponent = null;

        if (searchString) {
            Model.getShortDetail(searchString, imdbID).then((response) => {
                detailComponent = ReactDOM.render(React.createElement(detailPage, response), window.document.getElementById('App'));
            });
        }

        Model.getDetail(imdbID).then((response) => {
            if(searchString) {
                detailComponent.setState(response);
            } else {
                detailComponent = ReactDOM.render(React.createElement(detailPage, response), window.document.getElementById('App'));
            }
        });
    }
};
