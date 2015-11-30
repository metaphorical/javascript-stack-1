module.exports = {
    context: __dirname + "/",
    entry: {
        falcor1: "./bundle/falcor1.js",
        react1: "./bundle/react1.js",
        react2: "./bundle/react2.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            //Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
            {
                test:/\.js?$/,
                loader: "babel",
                query: {
                    presets:['react']
                }
            }
        ]
    }
};