const React = require('react');
/*
Creation of the components for server side rendering call happens here...
 */
module.exports = {
    Home: React.createFactory(require('./home')),
    Search: React.createFactory(require('./search')),
    SearchCard: React.createFactory(require('./common/searchCard')),
    SearchResultList: React.createFactory(require('./search/resultsList'))
};
