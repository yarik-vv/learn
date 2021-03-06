'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',

  entry: {
    build: './build'
  },

  output: {
    path: __dirname + '/www',
    publicPath: '/',
    filename: '[name].js'
  },

  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        include: __dirname + '/src',
        loader: 'svg-sprite-loader'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new CleanWebpackPlugin(__dirname + '/www/*'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
    })
  ],

  devServer: {
    port: 9000,
    contentBase: __dirname + '/www',
    watchContentBase: true,
    compress: true,
    inline: true,
    hot: true
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  );
}
