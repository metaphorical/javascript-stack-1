module.exports = {
    context: __dirname + "/",
    entry: {
        falcor1: "./bundle/falcor1.js",
        react1: "./bundle/react1.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
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