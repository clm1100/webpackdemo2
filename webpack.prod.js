const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
          }),
        new HtmlWebpackPlugin({
            title:"哈哈哈啊",
            filename:'index.html',
            template:'./src/index.html',
            chunks:['runtime','vendor','common','index']
        }),
        new HtmlWebpackPlugin({
            title:"列表页",
            filename:'list.html',
            template:'./src/list.html',
            chunks:['runtime','vendor','common','list']
        })
    ],
    devtool:"source-map",
    optimization: {
      runtimeChunk: {
        name: "runtime",
      },
      splitChunks: {
          cacheGroups: {
            // 注意: priority属性
            // 其次: 打包业务中公共代码
            common: {
              name: "common",
              chunks: "all",
              minSize: 10000,
              priority: 3
            },
            // 首先: 打包node_modules中的文件
            vendor: {
              name: "vendor",
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              priority: 10
            }
          }
        }
    }
})