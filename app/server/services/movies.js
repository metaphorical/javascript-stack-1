const apiCall = require('../../plugins/apiCall.js');
const logger = global.quantum.logger;


const movieService =  {
    getByTitle: (title) => {
        logger.info('Fetching movie data by title');
        return new Promise((resolve, reject) => {
            apiCall({
                    hostname: 'www.omdbapi.com',
                    path: '/?t=' + title + '&y=&plot=short&r=json'

                }, function (err, data) {
                    logger.info('finished');
                    if (!err) {
                        logger.info('detail by title successful');
                        resolve(data);
                    } else {
                        logger.error('detail by title failed with error');
                        logger.error(err);
                        reject(err);
                    }
                }
            );
        })
    },
    getById: (id) => {
        logger.info('Fetching movie data by IMDB ID');
        return new Promise((resolve, reject) => {
            apiCall({
                    hostname: 'www.omdbapi.com',
                    path: '/?i=' + id + '&plot=short&r=json'

                }, function (err, data) {
                    logger.info('finished');
                    if (!err) {
                        logger.info('detail by IMDB ID successful');
                        resolve(data);
                    } else {
                        logger.error('detail by IMDB ID failed with error');
                        logger.error(err);
                        reject(err);
                    }
                }
            );
        })
    },

    searchByTitle: (title) => {
        logger.info('Performing Movie search by title:' + title);
        return new Promise((resolve, reject) => {
            apiCall({
                hostname: 'www.omdbapi.com',
                path: '/?s=' + title + '&y=&plot=short&r=json'

            }, function(err, data) {
                if (!err) {
                    logger.info('search by title successful');
                    resolve(data);
                } else {
                    logger.error('Search by title failed with error');
                    logger.error(err);
                    reject(err);
                }
            });
        });
    }
};

module.exports = movieService;