var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './bin/www',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'Datavisualization.js'
  },  
   module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules)/,
          query: {
            presets: ['es2015']
          }
        }
    ]
  },
  externals: nodeModules,
  node: {
  __dirname: true
  }
}