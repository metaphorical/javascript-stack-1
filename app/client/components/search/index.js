"use strict"

const React = require('react');
const ReactDOM = require('react-dom');
const searchForm = require('./searchForm.jsx');
const resultList = require('./searchResultList');
var movieModel = require('../../../models/movieModel.js');

module.exports = React.createClass({
    componentDidMount() {
      console.log('Search form mounted');
    },
    doSearch(e) {
        e.preventDefault();
        let searchText = this.searchInput.value.trim();
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
    render() {
        return searchForm(this);
    }
});
