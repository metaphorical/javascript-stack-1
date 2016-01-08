var homeCtrl = require('../controllers/pages/home.js');
var searchCtrl = require('../controllers/pages/search.js');

var pageRouter = function(app) {
    app.get('/', homeCtrl.getHome);
    app.get('/search/:searchString', searchCtrl.search);

};

module.exports = pageRouter;
