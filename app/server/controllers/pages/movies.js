const movieService = require('../../services/movies.js');
const logger = global.quantum.logger;

var moviesController = {
    getByTitle: (req, res) => {
        var title =  req.params.title;
        movieService.getByTitle(title).then((data) => {
            res.end(data);
        }, (err) => {
            res.send('Error performing detail by title ' + JSON.parse(err));
        });
    },
    getById: (req, res) => {
        var imdbid =  req.params.imdbid;
        movieService.getById(imdbid).then((data) => {
            res.end(data);
        }, (err) => {
            res.send('Error performing detail by id' + JSON.parse(err));
        });
    },
    searchByTitle: (req, res) => {
        var title =  req.params.title;
        movieService.searchByTitle(title).then((data) => {
            res.end(data);
        }, (err) => {
            res.send('Error performing search' + JSON.parse(err));
        });
    }
};

module.exports = moviesController;
