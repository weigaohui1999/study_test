const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/main.js',  // 入口
    // 出口
    output: {
        // 出口文件夹名称
        path: path.resolve(__dirname, 'dist'),
        filename: '打包less文件/' //出口文件名称
    },
    // 自动生成html文件
    plugins: [new HtmlWebpackPlugin({
        template: './src/public/index.html' //要生成的文件路径
    })],
    // 加载器配置
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ["less-loader", "style-loader", "css-loader"]
            }
        ]
    }

}