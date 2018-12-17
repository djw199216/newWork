const path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:"./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    devServer:{
        hot:true,
        inline:true
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};