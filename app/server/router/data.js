var FalcorRouter = require("falcor-router");
var moviesService = require("../services/movies.js");
/**
 *  Falcor Router instance to handle data for the system
 */
var router = new FalcorRouter([
    {
        route: 'search[{keys:searchText}]items[{integers:resultKeys}]',
        get: function(pathSet) {
            //Using search service to fetch data for the model
            return moviesService.searchByTitle(encodeURIComponent(pathSet.searchText))
                .then(function(JSONResults) {
                    /*
                        Mapping of the stuff starts here
                        You get path set as JSON graph path in form similar to:
                         [
                          'search',
                          ['star wars' ],
                          'items',
                          [ 0, 1, 2, 3 ],
                          searchText: [ 'star wars' ],
                          resultKeys: [ 0, 1, 2, 3 ]
                         ]
                         So you map what you return based of what path tells you
                     */
                    var results = JSON.parse(JSONResults).Search;
                    var model = pathSet.searchText.map(function(key) {
                            return { path: [pathSet[0], key], value: {items: pathSet.resultKeys.map((key)=>{
                                    return results[key];
                                })
                            }};
                        });
                    return model;
                });
        }
    }
]);

module.exports = router;