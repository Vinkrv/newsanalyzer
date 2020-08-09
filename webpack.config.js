const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/about/index.js',
    analytics: './src/analytics/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [(isDev ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }),
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
          'postcss-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
        options: {
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]',
            esModule: false
          }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.99, 0.99],
                speed: 1
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                enabled: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks:['main'],
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks:['about'],
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks:['analytics'],
      template: './src/analytics.html',
      filename: 'analytics.html'
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new WebpackMd5Hash()
  ]
}
