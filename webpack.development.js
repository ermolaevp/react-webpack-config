const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

module.exports = function(env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'inline-source-map',
    devServer: {
      port: 8001,
      historyApiFallback: true,
    },
  });
};
