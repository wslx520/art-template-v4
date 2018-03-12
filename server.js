const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

const DevServer = require('webpack-dev-server');

const port = 3000;
// push inline mode config to webpack.config
// config.entry.unshift(`webpack-dev-server/client?http://localhost:${port}/`);
let compiler = webpack(config);
let serverConfig = {
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

let server = new DevServer(compiler, serverConfig);

server.listen(port, function(err) {
    if (err) throw err;
    console.log(`webpack dev server listening at port: ${port}`)
});