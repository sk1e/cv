// 'use strict'

var path = require('path');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './cv.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug' }
    ]
  },
    plugins: [
        new NpmInstallPlugin(),
        new HtmlWebpackPlugin({template: "index.pug"}),
    ],

};

