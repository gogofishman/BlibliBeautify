const webpack = require('webpack');

module.exports = {
  optimization:{
     minimize: false,
   },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};