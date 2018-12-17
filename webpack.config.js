const path = require("path");
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin("style.css");

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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use:[{
                        loader:'css-loader'
                    },{
                        loader:'sass-loader',
                        options: {
                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    }],
                    fallback:'style-loader'
                })
            }
        ]
    },
    plugins: [
        extractCss
    ]
};