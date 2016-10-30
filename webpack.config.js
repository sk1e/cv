'use strict'


var path = require('path');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './cv.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.pug$/, loader: 'pug' },
        { test: /\.styl$/, loader: ExtractTextPlugin.extract('!css!stylus') },
        { test: /\.(svg|ttf|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]' }
    ]
  },
    plugins: [
        new NpmInstallPlugin(),
        new HtmlWebpackPlugin({template: "index.pug"}),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        

    ],

};

