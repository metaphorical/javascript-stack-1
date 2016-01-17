"use strict";

const React = require('react');
const searchForm = require('./searchForm.jsx');


module.exports = React.createClass({
    
    searchAction(e) {
        e.preventDefault();
        let searchText = this.searchInput.value.trim();
        if (process.env.APP_ENV === 'browser') {
            quantum.router.navigate('/search/' + searchText, { trigger: true });
        }
    },
    render() {
        return searchForm(this);
    }
});
