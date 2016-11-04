'use strict'

module.exports = {
  entry: {
    'bundle': [
      './source/app.js',
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
    ]
  }
}
