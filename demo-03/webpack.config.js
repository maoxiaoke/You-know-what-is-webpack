var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [{
            test: /\.css$/,
            //use: [ 'style-loader', 'css-loader' ]
            use: ExtractTextPlugin.extract({
              use: 'css-loader'
            })
        }]
    },
    //ExtractTextPlugin
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true
    }
};