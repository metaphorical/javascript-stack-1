
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
    routes: {
        "search/:searchText": "search",
        "detail/:imdbID": "detail",
        "*splat": "home"
    }
});