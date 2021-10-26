const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: "development",
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 4200,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],
};