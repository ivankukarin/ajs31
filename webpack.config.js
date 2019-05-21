const path = require('path');

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
            filename: "./index.html"
        })
    ],
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
};