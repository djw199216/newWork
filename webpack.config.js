const path = require("path");
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin("style.css");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:["./src/index.js"],
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
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'admin.html'
        },new ExtractTextPlugin("style.css"))
    ]
};