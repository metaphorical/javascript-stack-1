module.exports = {
    context: __dirname + "/",
    entry: "./bundle/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
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