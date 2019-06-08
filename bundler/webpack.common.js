const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'sourcemap',
    plugins:
    [
        new CopyWebpackPlugin([ { from: 'static' } ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'about-me',
            template: path.resolve(__dirname, '../src/about-me.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'water-on-wheels',
            template: path.resolve(__dirname, '../src/water-on-wheels.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'japanese-craft',
            template: path.resolve(__dirname, '../src/japanese-craft.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'red-list',
            template: path.resolve(__dirname, '../src/red-list.html')
        }),
    ],
    entry: './src/index.js',
    output:
    {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use:
                [
                    'html-loader'
                ]
            }
        ]
    }
}