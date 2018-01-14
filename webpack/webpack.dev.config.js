var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'app/App.js')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ],
    },
    output: {
        path: parentDir + 'dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir + 'dist',
        historyApiFallback: true
    }
}