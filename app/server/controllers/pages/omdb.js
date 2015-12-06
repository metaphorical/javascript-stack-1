var omdbService = require('../../services/omdb.js');
var logger = global.quantum.logger;
var omdbController = {
    getByTitle: function (req, res) {
        var options = {
            title: req.params.title
        };
        omdbService.searchByTitle(options, function(err, data) {
            if (!err) {
                res.send(data);
            } else {
                res.send('Error performing search');
            }
        });
    }
};

module.exports = omdbController;
