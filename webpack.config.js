'use strict'


const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

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
                cwd: path.resolve(__dirname, './blocks/icon/icons'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'blocks/icon/sprite.png'),
                css: path.resolve(__dirname, 'blocks/icon/sprite.styl')
            },
            apiOptions: {
                cssImageRef: "sprite.png"
            }
        })

    ],

};

