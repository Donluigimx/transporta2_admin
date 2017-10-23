const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    devtool: 'cheap-module-inline-source-map',
    entry: ['babel-polyfill', 'whatwg-fetch', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebPackPlugin({
        template: 'app/index.html'
    })],
    resolve: {
        modules: [path.resolve('./app'), 'node_modules']
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;