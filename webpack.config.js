
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commomCssLoader = [

    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader'
    }
]

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'static/main.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }]],
                        cacheDirectory: true
                    }
                },
                ],
            }, {
                test: /\.css$/,
                use: [...commomCssLoader
                ]
            },
            {
                test: /\.less$/,
                use: [
                    ...commomCssLoader,
                    'less-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            {
                exclude: [/\.(css|less|jpg|png|gif|js|html)$/, /node_modules/],
                loader: 'file-loader',
                options: {
                    // name: '[hash:10].[ext]',
                    outputPath: 'file',
                    esModule: false
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/static/index.html',
            minify: {
                // 折叠空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'css/index.css',
                chunkFilename: 'css/[id].css',
            }),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production',//生产模式自动压缩js代码 

}