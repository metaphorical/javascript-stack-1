module.exports = {
    context: __dirname + "/",
    entry: {
        falcor1: "./app/client/bundle/falcor1.js",
        react1: "./app/client/bundle/react1.js",
        react2: "./app/client/bundle/react2.js"
    },
    output: {
        path: __dirname + "/public/js",
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