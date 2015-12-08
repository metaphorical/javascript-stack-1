const React = require('react');
const ReactDOM = require('react-dom/server');
const components = require('../../../client/components');

const searchComponent = React.createFactory(components.Search);

var homeController = {
    getHome(req, res) {
        res.render('layout', {
            react: ReactDOM.renderToString(searchComponent({}))
        });
    }
};

module.exports = homeController;
