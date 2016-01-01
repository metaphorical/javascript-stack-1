"use strict"

const React = require('react');
const Backbone = require('backbone');
const searchForm = require('./searchForm.jsx');
const Router = require('../../router');
const actions = require('../../router/actions.js');


module.exports = React.createClass({
    componentDidMount() {
        Backbone.history.start({
            pushState: true
        });
    },
    componentWillMount() {
        this.router = new Router();
        this.actions = actions;
        this.router.on('route:search', this.actions.Search);
        this.router.on('route:home', this.goHome );
        this.router.on('route:detail', this.getDetails );
    },
    doSearch(e) {
        e.preventDefault();
        let searchText = this.searchInput.value.trim();
        this.setState({lastSearch: searchText});
        this.router.navigate('/search/' + searchText, {});
        this.actions.Search(searchText);
    },
    getDetails(imdbID) {
        let detailData = {
          imdbID: imdbID
        };
        if (this.state && this.state.lastSearch) {
            detailData.searchText = this.state.lastSearch;
        }
        this.actions.Detail(detailData)
    },
    goHome() {
        console.log('wha?');
        this.router.navigate('/search/batman', {trigger: true});
    },
    render() {
        return searchForm(this);
    }
});
