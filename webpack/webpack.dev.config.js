const path = require('path');
const Jarvis = require('webpack-jarvis');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'app/App.js'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Jarvis({
      port: 1337,
    }),
  ],
  output: {
    path: `${parentDir}dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: `${parentDir}dist`,
    historyApiFallback: true,
  },
};
