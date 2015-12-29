"use strict"

const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');
const searchForm = require('./searchForm.jsx');
const resultList = require('./searchResultList');
const Router = require('../../router');
var movieModel = require('../../../models/movieModel.js');


module.exports = React.createClass({
    componentDidMount() {
        Backbone.history.start({
            pushState: true
        });
    },
    componentWillMount() {
        this.router = new Router();
        this.router.on('route:search', this.performSearch);
        this.router.on('route:home', this.goHome );
    },
    doSearch(e) {
        e.preventDefault();
        let searchText = this.searchInput.value.trim();
        this.router.navigate('/search/' + searchText, {});
        this.performSearch(searchText);

    },
    performSearch(searchText) {
        if(searchText !== '') {
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
                    ReactDOM.render(React.createElement(resultList, {
                        results: results,
                        searchString: searchText
                    }), window.document.getElementById('resultsList'));
                });
        }
    },
    goHome() {
        console.log('wha?');
        this.router.navigate('/search/avatar', {trigger: true});
    },
    render() {
        return searchForm(this);
    }
});
