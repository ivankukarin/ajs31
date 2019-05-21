const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    rules: [
        ...
        {
        test: /\.css$/,
        use: [
        MiniCssExtractPlugin.loader, 'css-loader',
            ],
        },
    ],

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./src/index.html"
        })
    ],

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
};