const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'development',
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
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
    ],
    // devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    }
})