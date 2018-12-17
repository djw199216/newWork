const path = require("path");
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractCss = new ExtractTextPlugin("./src/css/style.css");//这里的参数是配置编译后的css路径和文件名,相对于output里的path选项

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
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", 'css!sass')
                //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'sass-loader'
                        }
                    ],
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({title:'custom title2',template:__dirname + '/public/tempIndex.html'}),
        extractCss
    ]
};