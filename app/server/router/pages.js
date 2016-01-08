var homeCtrl = require('../controllers/pages/home.js');
var searchCtrl = require('../controllers/pages/search.js');
var detailCtrl = require('../controllers/pages/detail.js');

var pageRouter = function(app) {
    app.get('/', homeCtrl.getHome);
    app.get('/search/:searchString', searchCtrl.search);
    app.get('/detail/:imdbID/:searchString*?', detailCtrl.getDetail);

};

module.exports = pageRouter;
