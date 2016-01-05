require('babel-register');
module.exports = {
    Home: require('./home'),
    Search: require('./search'),
    SearchCard: require('./common/searchCard'),
    SearchResultList: require('./search/resultsList')
};
