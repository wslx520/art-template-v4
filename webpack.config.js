const path = require('path')
const webpack = require('webpack');

// 此插件有问题，暂时不要用
const InstallPlugin = require('npm-install-webpack-plugin');
module.exports = {
    entry: ['./source/index.js'],
    output: {
        // where to put the bundled file(s)
        path: path.resolve('./dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        // library: 'art-template',
        // libraryTarget: 'umd',
        // Make sure publicPath always starts and ends with a forward slash.
        // not start with `.` , it's mean `./dist` will bring on mistakes.
        // can be override in webpack-dev-server's config 
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    // TIP: nested array
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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            },
            // if you forget this, you will lose source map for the compressed code.
            sourceMap: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        // auto install dependences
        // new InstallPlugin()
    ]
}