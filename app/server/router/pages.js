var homeCtrl = require('../controllers/pages/home.js');
var omdbCtrl = require('../controllers/pages/omdb.js');

var pageRouter = function(app) {

    app.get('/', homeCtrl.getHome);
    app.get('/bytitle/:title', omdbCtrl.getByTitle);

};

module.exports = pageRouter;
