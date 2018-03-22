const path = require('path')
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// 此插件有问题，暂时不要用 (https://github.com/webpack-contrib/npm-install-webpack-plugin/issues/105)
const InstallPlugin = require('npm-install-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
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
                    presets: ['babel-preset-env', 'babel-preset-es2015-loose'].map(require.resolve),
                    plugins: ['babel-plugin-syntax-dynamic-import'].map(require.resolve)
                }
                // use: [
                //     // {loader: 'es3ify-loader'},
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             // TIP: nested array
                //             presets: ['babel-preset-env', 'babel-preset-es2015-loose'].map(require.resolve),
                //             plugins: ['babel-plugin-syntax-dynamic-import'].map(require.resolve)
                //         }
                //     }

                // ]
                
                // use: [{
                //     loader: 'babel-loader',
                //     options: {
                //         presets: [['es2015', {modules: false}]],
                //         plugins: ['syntax-dynamic-import']
                //     }
                // }]
            },
            // {
            //     test: /\.js$/,
            //      这个 loader 不支持 webpack 自家的新的 import()语法, 导致没法用
            //     loader: 'es3ify-loader',
            //     enforce: 'post'
            // },
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
    // devtool: 'eval',
    devtool: 'source-map',
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     ie8: true,
        //     compress: {
        //         warnings: false,
        //         drop_console: false
        //     },
        //     // if you forget this, you will lose source map for the compressed code.
        //     sourceMap: true
        // }),
        // 此插件有不兼容 IE8- 的代码: Object.defineProperty - getter setter
        // new webpack.HotModuleReplacementPlugin(),
        // auto install dependences
        // new InstallPlugin()
        // 生成兼容 IE8- 的代码
        new es3ifyPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        },
        // minimize:false
        minimizer: [
        // 在使用 --mode production 的情况下, 这个压缩配置依然有效不会被忽视
        // 不然一开 production ,压出来就不兼容IE8了
            new UglifyJSPlugin({
                uglifyOptions: {
                    // VERY IMPORTANT for ie8-
                    ie8: true,
                    compress: {
                        warnings: false,
                        drop_console: true
                    },
                    // if you forget this, you will lose source map for the compressed code.
                    sourceMap: true
                }
            })
        ]
    },
    devServer: {
        contentBase :'./',
        watchContentBase: true,
        // override the config in webpack.config
        // DO NOT start with .
        // and then /dist = /dist/, but recommend /dist/
        publicPath: '/dist/',
        // auto refresh
        hot: true,
        historyApiFallback: true
    }
    // mode: 'development'
}