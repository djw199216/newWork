const path = require("path");
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractCss = new ExtractTextPlugin("css/a.css");//这里的参数是配置编译后的css路径和文件名,相对于output里的path选项

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
        // new HtmlWebpackPlugin({title:'custom title2',template:__dirname + '/public/tempIndex.html'}),
        extractCss
    ]
};