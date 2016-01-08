const falcor = require('falcor');
var HttpDataSource = require('falcor-http-datasource');


//JSON model points to falcor router data source set in server.js
// This is virtual JSON file that actually executes Falcor JSON graph paths and returns data
var model = new falcor.Model({
    source: new HttpDataSource('/model.json')
});

const getShortDetailFromSearch = (searchString, imdbID) => {
        return new Promise((resolve, reject) => {
            model.
            get("search['" + searchString + "']items[0..9]['Title', 'Poster', 'Year', 'imdbID']").
            then((response) => {
                /*
                We display basic stuff waiting for the next call to get us more data
                */
                var results = response.json.search[searchString].items;
                var resultsById = {};
                Object.keys(results).map((key) => {
                    resultsById[results[key].imdbID] = results[key];
                });
                var result = resultsById[imdbID];
                result.Search = searchString;
                resolve(result);
            }).
            catch((e) => reject(e));
        });
};

const getFullDetil = (imdbID) => {
    return new Promise((resolve, reject) => {
        model.
        get("detail['" + imdbID + "']['Title', 'Genre', 'Director', 'Plot', 'Poster', 'Year']").
        then(function(result) {
            var detailData = result.json.detail[imdbID];
            resolve(detailData);
        }).
        catch(e => reject(e));
    });
};

const searchByTitle = (searchText) => {
    return new Promise((resolve,reject) => {
        //Search model will get us JSON we need
        model.
        //We put a path into get... make sure it is closed (contains end points (leafs of a branch or whatever you want to call it)
        //because in other case it is going to give you a pain of several requests for the same data.
        get("search['" + searchText + "']items[0..9]['Title', 'Poster', 'Year', 'imdbID']").
        then((result) => {
            let searchResults = result.json.search[searchText].items;
            /* here indexes are order keys but nevertheless we need to do in the way that allows for
            easier relating of data...

            It has to be stored in an array in order to avoid loops (we want to use only maps if possible) so
            we are going for key: <smt>, value:<smt> array members.

            */
            let results = Object.keys(searchResults).map((key) => {
                return {
                    key: key,
                    value: searchResults[key]
                };
            });

            resolve({
                results: results,
                searchString: searchText
            });
        }).
        catch((e) => reject(e));
    });
};

module.exports = {
    getShortDetail: getShortDetailFromSearch,
    getDetail: getFullDetil,
    search: searchByTitle
};
