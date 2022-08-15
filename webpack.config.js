const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        'chrome': '58',
                                        'ie': '11'
                                    },
                                    'corejs': '3',
                                    'useBuiltIns': 'usage'
                                }
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 'postcss-preset-env'
                    //             ]
                    //         }
                    //     }
                    // },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 8080,
        compress: false,
        open: false
    }
}