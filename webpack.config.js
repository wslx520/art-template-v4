const path = require('path')
const webpack = require('webpack');
module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: 'art-template',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: 'es2015'
                }
            },
            {
                test: /\.html$/,
                loader: 'art-template-loader',
                options: {}
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['manifest']
        })
    ]
}