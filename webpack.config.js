/* eslint-env node */
/* eslint-disable no-process-env */
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");


const options = {
    entry: [
        path.join(__dirname, 'main/main.js')
    ],
    devtool: 'eval-source-map',
    devServer: {
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel",
                include: [
                    path.resolve("src"),
                    path.resolve("main")
                ],
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'main/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};

module.exports = options;
