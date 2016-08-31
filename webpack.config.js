var path = require('path');
var webpack = require('webpack');
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
  entry: './app.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'Datavisualization.js'
  },
  externals: nodeModules
}

