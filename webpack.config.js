const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputDir = path.join(__dirname, 'build/')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'pruduction' : 'development',
  output: {
    path: outputDir,
    filename: 'Index.js'
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        esModule: false,
      },
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
}

