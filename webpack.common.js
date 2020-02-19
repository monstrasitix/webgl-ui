// Plugins
const HTMLPlugin = require('html-webpack-plugin');


// Utility
const { root, rule } = require('./webpack.util');


module.exports = {
    entry: {
        app: root('./src/index.ts'),
    },
    output: {
        path: root('./dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            rule({
                test: /\.ts?$/,
                use: 'ts-loader',
            }),
            rule({
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }),
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.scss',
            '.json',
        ],
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: root('./src/index.html'),
        }),
    ],
};