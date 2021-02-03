
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
process.env.NODE_ENV = 'production'

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'static/main.[contenthash:10].js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            oneOf: [

                {
                    test: /\.js$/,
                    exclude: /node_module/,
                    use: [
                        /* 多进程打包 */
                        {
                            loader: 'thread-loader',
                            options: {
                                works: 2
                            }
                        }
                        , {
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
                        }
                    ],
                },
                {
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
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/static/index.html',
            favicon: './src/static/favicon.ico',
            inject: true,
            minify: {
                // 折叠空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'static/index.[contenthash:10].css',
                chunkFilename: 'static/[id].[contenthash:10].css',
            }),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // mode: 'production',//生产模式自动压缩js代码
    mode: 'development',// 开发环境
    resolve: {
        //配置路径别名
        alias: {
            //简写路径
            '@': resolve(__dirname, 'src'),
        },
        //配置省略文件后缀名的规则
        extensions: [".ts", ".tsx", '.js', '.vue', '.json'],
        //告诉webpack 解析模块时去那个目录
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']

    },
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 8373,
        open: true,
        hot: true
    },
    devtool: 'cheap-source-map'

}