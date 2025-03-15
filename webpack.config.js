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
      //Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./images/[name][ext]"
        }
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]"
        }
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
      // jQuery
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        },
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), 
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
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/add-blog.html',
      filename: 'add-blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/blog-details.html',
      filename: 'blog-details.html',
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/blog.html',
    //   filename: 'blog.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/contact.html',
    //   filename: 'contact.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/project-details.html',
    //   filename: 'project-details.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/project.html',
    //   filename: 'project.html',
    // }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    
  ],
};
