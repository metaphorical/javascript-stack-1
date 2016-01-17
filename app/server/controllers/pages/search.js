const ReactDOM = require('react-dom/server');
const Components = require('../../../dist/components.packed');

const movieService = require('../../services/movies.js')();




var searchController = {
    search: (req, res) => {
        movieService.searchByTitle(req.params.searchString).then((response) => {
            var results = JSON.parse(response).Search.map((result, key) => {
                return {
                        "key" : key,
                        "value" : result
                };
            });

            var renderData = {
                'results': results,
                'searchString': req.params.searchString
            };
            res.render('layout', {
                react: ReactDOM.renderToString(Components.Search(renderData))
            });
        });
    }
};

module.exports = searchController;
