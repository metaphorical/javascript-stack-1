// To get all the ES2015 fun stuff
require('babel-register');
// ... and to get Promises
require("babel-polyfill");

// Actual server code starts here
// since this is entry point we can not use ES2015 here due parsers above work for all that comes next
var app = require('./app');

//API router
var apiRouter = require('./app/server/router/api.js');
//Pages router
var pagesRouter = require('./app/server/router/pages.js');

//Setup Falcor server and router
var FalcorServer = require('falcor-express');
var DataRouter = require('./app/server/router/data.js');

var logger = global.quantum.logger;

// Routing pages
pagesRouter(app);

app.use(function (req, res, next) {
  logger.info('Time: %d', Date.now());
  next();
});

//Attaching falcor middleware to serve all to model.json
app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
    return DataRouter;
}));

//Attaching API subrouter and versioning the API
//This is just for testing purposes since all teh data is planed ot be handled through falcor router
app.use('/api/v1/', apiRouter);

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/js/app/main.bundle.js',
    hot: true,
}));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('App listening at http://%s:%s', host, port);
});
