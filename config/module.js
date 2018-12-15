const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dev = process.env.NODE_ENV;
module.exports = {
    rules:[
        {
            test:/\.scss$/,
            use: [
                dev=="development"?'style-loader':MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader'
              ],
        },
        {
            test:/\.css$/,
            use: [
                dev=="development"?'style-loader':MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
              ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name: 'img/[hash:5].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name: dev=="development"?'[hash:5].[ext]':'/css/font/[hash:5].[ext]'
                        // name: '/font/[hash:5].[ext]'
                        // name: '/css/font/[hash:5].[ext]',
                    }
                }
            ]
        },
        {
            test: /\.(htm|html)$/i,
            use:[
                {loader: 'html-withimg-loader'}
            ]
        },
        // {
        //     test: /\.js$/,
        //     exclude: /(node_modules)/,
        //     use: {
        //       loader: "babel-loader" // 转化需要的loader
        //     }
        // }
    ]
}