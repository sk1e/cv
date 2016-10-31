'use strict'


var path = require('path');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');

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
        { test: /\.(png|svg|ttf|eot|woff|woff2)$/, loader: 'file?name=[path][name].[ext]' }
    ]
  },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "icons"]
    },
    plugins: [
        new NpmInstallPlugin(),
        new HtmlWebpackPlugin({template: "index.pug"}),
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, './icons'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'sprite.png'),
                css: path.resolve(__dirname, 'sprite.styl')
            },
            apiOptions: {
                cssImageRef: "sprite.png"
            }
        })

    ],

};

