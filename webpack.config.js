const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
// img loader
{
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images', // تعديل هنا
      },
    },
  ],
},
      // html loader
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // sass loader
      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), // المسار الذي يحتوي على ملفاتك
    },
    devMiddleware: {
      writeToDisk: true,
    },
    // يمكنك إعادة تفعيل الضغط إذا رغبت
    // compress: true,
    port: 9000,
    open: true,
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
};
