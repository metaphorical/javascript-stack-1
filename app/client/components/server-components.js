const React = require('react');
/*
Creation of the components for server side rendering call happens here...
 */
module.exports = {
    Search: React.createFactory(require('./search')),
    SearchCard: React.createFactory(require('./search/searchCard')),
    SearchResultList: React.createFactory(require('./search/searchResultList'))
};