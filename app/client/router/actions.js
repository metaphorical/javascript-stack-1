'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const detail = require('../components/detail');
const searchPage = require('../components/search');

var movieModel = require('../../models/movieModel.js');

const detailAction = (options) => {
    var detailComponent = null;

    options = JSON.parse(options);
    if(options.searchString) {
        movieModel.
            get("search['" + options.searchString + "']items[0..9]['Title', 'Poster', 'Year', 'imdbID']").
            then((response) => {
                /*
                 We display basic stuff waiting for the next call to get us more data
                 */
                var results = response.json.search[options.searchString].items;
                var resultsById = {};
                Object.keys(results).map((key) => {
                    resultsById[results[key].imdbID] = results[key];
                });
                var result = resultsById[options.imdbID];
                result.Search = options.searchString;
                detailComponent = ReactDOM.render(React.createElement(detail, resultsById[options.imdbID]), window.document.getElementById('App'));
            });
    }

    movieModel.
        get("detail['" + options.imdbID + "']['Title', 'Genre', 'Director', 'Plot', 'Poster', 'Year']").
        then(function(result) {
            var detailData = result.json.detail[options.imdbID];
            /*
             We hit interface with more data
             */
            if(options.searchString) {
                detailComponent.setState(detailData);
            } else {
                detailComponent = ReactDOM.render(React.createElement(detail, detailData), window.document.getElementById('App'));
            }
        });
};

const searchAction = (searchText) => {
    //Search model will get us JSON we need
    movieModel.
        //We put a path into get... make sure it is closed (contains end points (leafs of a branch or whatever you want to call it)
        //because in other case it is going to give you a pain of several requests for the same data.
    get("search['" + searchText + "']items[0..9]['Title', 'Poster', 'Year', 'imdbID']").
        then((result) => {
            let searchResults = result.json.search[searchText].items;
            /* here indexes are order keys but nevertheless we need to do in the way that allows for
             easier relating of data...

             It has to be stored in an array in order to avoid loops (we want to use only maps if possible) so
             we are going for key: <smt>, value:<smt> array members.

             */
            let results = Object.keys(searchResults).map((key) => {
                return {
                    key: key,
                    value: searchResults[key]
                }
            });
            //ReactDOM.render(React.createElement(components.Search), window.document.getElementById('App'));
            ReactDOM.render(React.createElement(searchPage, {
                results: results,
                searchString: searchText
            }), window.document.getElementById('App'));
        });
};

module.exports = {
    Detail: detailAction,
    Search: searchAction
};
