const path = require('path');
const configModule = require('./config/module.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        index:'./src/js/index.js',
        list:'./src/js/list.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        // filename:'[hash:6].js',
        filename: '[name].[hash].js',
    },
    module:configModule,
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title:"哈哈哈啊",
            filename:'index.html',
            template:'./src/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            title:"列表页",
            filename:'list.html',
            template:'./src/list.html',
            chunks:['list']
        })
    ]
}