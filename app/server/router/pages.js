var homeCtrl = require('../controllers/pages/home.js');
var moviesCtrl = require('../controllers/pages/movies.js');

var pageRouter = function(app) {

    app.get('/', homeCtrl.getHome);
    app.get('/title/:title', moviesCtrl.getByTitle);
    app.get('/detail/:imdbid', moviesCtrl.getById);
    app.get('/search/:title', moviesCtrl.searchByTitle);

};

module.exports = pageRouter;
