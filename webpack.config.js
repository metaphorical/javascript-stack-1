const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/",
    //Since key is used as a name of a file, I use it to add multiple output points by joining path and
    //concatinating with name that includes new path (pushing it all to public/js, but sorting into static and app folders
    entry: {
        "static/falcor1": "./app/client/views/static/falcor1.js",
        "static/react1": "./app/client/views/static/react1.js",
        "static/react2": "./app/client/views/static/react2.js",

        "app/home": "./app/client/views/app/home.js"
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            // Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
            {
                test:/\.js?$/,
                loader: "babel",
                query: {
                    presets:['react']
                }
            },
            // To be able to use .jsx files for separating HTML from js in component we need jsx loader
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            // Post-css loader setup, ot be able to bundle all the code for the components together
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            }

        ]
    },
    postcss: [
        require('autoprefixer-core')
    ],
    plugins: [
        // Plugin for writing css bundle loaded in components
        new ExtractTextPlugin('../css/style.css', { allChunks: true }),
        new webpack.DefinePlugin({
            // This is way to set or create global variables...
            // Will use it to check if React is rendered on server or on client side (in webpack or node)
            // APP_ENV does not need to be in process.env
            // NODE_ENV needs to be set to production in prod since lots of stuff, including React use it to optimize prod
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                APP_ENV: JSON.stringify('browser')
            }
        })
    ]
};