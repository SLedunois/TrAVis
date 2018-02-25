const path = require('path');
const Jarvis = require('webpack-jarvis');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'app/index.jsx'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-css-modules'],
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
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
    proxy: {
      '*': {
        target: `http://localhost:${process.env.NODE_ENV || 3000}`
      }
    }
  },
};
 