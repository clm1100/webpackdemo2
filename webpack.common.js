const path = require('path');
const configModule = require('./config/module.js');
const webpack = require('webpack');
module.exports = {
    entry:{
        index:'./src/js/index.js',
        list:'./src/js/list.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        // filename:'[hash:6].js',
        filename: 'js/[name].[hash].js',
        // chunkFilename: "[name].chunk.js"
    },
    module:configModule
}