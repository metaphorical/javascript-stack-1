const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

//Use text extraction plugin to get all the css in separate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Solution below gave me the most problems while figuring out server side rendering solution...
 *
 * The main problem is that webpack is assuming that you are using it in the browser, meaning that if you set externals
 * it works for the browser, so require('something') becomes just something (setting it to global).
 *
 * We need to change this by being explicit about this being commonjs modules
 *
 * Example of externals object:
 *
 * {
 * ...
 * 'body-parser': 'commonjs body-parser',
 * 'bucker': 'commonjs bucker',
 * 'express': 'commonjs express'
 * ...
 * }
 *
 * Without this we can get any error in line with your code looking for the external module in globals and not finding it
 *
 * It also reduces size of output file
 */
var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

//Loaders for all tasks
const defaultLoaders = [
    // Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
    {
        test:/\.(js|jsx)?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
            presets:['react', 'es2015']
        }
    },
    // Post-css loader setup, to be able to bundle all the code for the components together
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }

];

module.exports = [{
    name: "client",
    context: __dirname + "/",
    //Since key is used as a name of a file, I use it to add multiple output points by joining path and
    //concatinating with name that includes new path (pushing it all to public/js, but sorting into static and app folders
    entry: {
        "app/main": "./app/client/views/app/main.js",

        "../../tests/packed-specs/search": "./tests/specs/search-form-spec.js"
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: defaultLoaders
    },
    postcss: [
        require('autoprefixer'),
        require('postcss-nested')
    ],
    plugins: [
        // Plugin for writing css bundle loaded in components
        new ExtractTextPlugin('../css/style.css', { allChunks: true }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            // This is way to set or create global variables...
            // Will use it to check if React is rendered on server or on client side (in webpack or node)
            // APP_ENV does not need to be in process.env
            // NODE_ENV needs to be set to production in prod since lots of stuff, including React use it to optimize prod
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APP_ENV: JSON.stringify('browser')
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
},{
    name: "server",
    context: __dirname + "/",
    entry: {
        "components": "./app/client/components/server-components.js"
    },
    //making server side rendering version of code
    output: {
        path: path.join(__dirname, 'app/dist/'),
        filename: "[name].packed.js",
        // declaring format of export library (preparing it for node
        // http://webpack.github.io/docs/configuration.html#output-librarytarget
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    //Server side externals
    externals: nodeModules,
    //handling of node specific stuff
    node: {
        __filename: true,
        __dirname: true,
        console: true
    },
    //Loading stuff in the same way as on client side
    module: {
        loaders: defaultLoaders
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        // Writing to css file that wont be used (important one is client side rendered.
        new ExtractTextPlugin('../dist/discard/discard.css', { allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                //Tell it that it is in node
                APP_ENV: JSON.stringify('node')
            }
        })
    ]

}];
