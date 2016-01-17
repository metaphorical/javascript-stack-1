const ReactDOM = require('react-dom/server');
const Components = require('../../../dist/components.packed');

const movieService = require('../../services/movies.js')();




var detailController = {
    getDetail: (req, res) => {
        //server side redirection to prevent client side re-render and snap for now (it is demo/prototype after all)
        if (req.params.searchString) {
            res.statusCode = 302;
            res.setHeader("Location", "/detail/" + req.params.imdbID);
            res.end();
        }
        movieService.getById(req.params.imdbID).then((response) => {
            var detailData = JSON.parse(response);

            res.render('layout', {
                react: ReactDOM.renderToString(Components.Detail(detailData))
            });

        });
    }
};

module.exports = detailController;
