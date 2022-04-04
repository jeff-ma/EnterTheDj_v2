const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: __dirname,
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: false,
        port: 3002
    },
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.module\.(css|scss)$/i,
                use: [
                    'style-loader',
                    "@teamsupercell/typings-for-css-modules-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            } 
                        }
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /\.module\.(css|scss)$/i,
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|ico)$/i,
                type: 'asset/resource'
            },
            { 
                test: /\.(woff|woff2|eot|ttf)$/,
                type: 'asset/inline' 
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".ts", ".tsx", ".js", ".json"],
                },
                use: "ts-loader",
            },
        ]   
    },
    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, 'build'),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' )
        }),
        new Dotenv(),
        // new MiniCssExtractPlugin(),
    ],
};