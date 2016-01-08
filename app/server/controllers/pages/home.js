const React = require('react');
const ReactDOM = require('react-dom/server');

/*
    Components and their server side rendering are commented out since CSS modules are making it hard to render this stuff server side.
 */
//const components = require('../../../client/components');
//
const Components = require('../../../dist/components.packed');


var homeController = {
    getHome: (req, res) => {
        res.render('layout', {
            react: ReactDOM.renderToString(Components.Home({}))
        });
    }
};

module.exports = homeController;
