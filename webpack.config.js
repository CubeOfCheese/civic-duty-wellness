const path = require('path');

module.exports = {
  entry: './src/main/js/App.js',
  cache: true,
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    fallback: {
      crypto: false,
    },
  },
  output: {
    path: path.resolve(__dirname, './src/main/resources/static/built'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
