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
                    // nested array
                    presets: [['es2015', {modules: false}]],
                    plugins: ['syntax-dynamic-import']
                }
                // use: [{
                //     loader: 'babel-loader',
                //     options: {
                //         presets: [['es2015', {modules: false}]],
                //         plugins: ['syntax-dynamic-import']
                //     }
                // }]
            },
            {
                test: /\.html$/,
                loader: 'art-template-loader',
                options: {
                    // this will strip \r\n, whitespaces
                    minimize: true
                }
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