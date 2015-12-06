var apiCall = require('../../plugins/apiCall.js');
var logger = global.quantum.logger;

var omdb = {
    searchByTitle : function(options, callback) {
        logger.info('Performing OMDB search');
        apiCall({
            hostname: 'www.omdbapi.com',
            path: '/?t=' + options.title + '&y=&plot=short&r=json'

        }, function(err, data){
            if (!err) {
                logger.info('search successful');
                callback(null, data);
            } else {
                logger.error('Search failed with error');
                logger.error(err);
                callback(err, null);
            }
        });
    }
};

module.exports = omdb;
