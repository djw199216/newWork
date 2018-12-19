const path = require("path");
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// const extractCss = new ExtractTextPlugin("style.css");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

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
            },
            {//css打包到js中
                test: /\.scss/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {//css单独打包
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader:"css-loader"
                    },{
                        loader: 'sass-loader'
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};