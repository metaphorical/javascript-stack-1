const React = require('react');
const searchForm = require('./searchForm.jsx');

module.exports = React.createClass({
    componentDidMount() {
      console.log('Search form mounted');
    },
    doSearch(e) {
        e.preventDefault();
        console.log('Place code here... for umm... search?');
    },
    render() {
        return searchForm(this);
    }
});
