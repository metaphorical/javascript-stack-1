const React = require('react');

module.exports = {
    Search: React.createFactory(require('./search')),
    SearchCard: React.createFactory(require('./searchCard')),
    SearchResultList: React.createFactory(require('./searchResultList'))
};