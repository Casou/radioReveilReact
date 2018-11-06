const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9999,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        ...common.plugins,
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new webpack.HotModuleReplacementPlugin()
    ]
});