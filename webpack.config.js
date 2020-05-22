const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = require('isDev');
const WorkboxPlugin = require('workbox-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintrc: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  performance: {
    hints: false
  },
  optimization: {
    // Use terser instead of the default Uglify since service
    // worker code does not need to be transpiled to ES5.
    minimizer: [
      new Terser({
        // Ensure .mjs files get included.
        test: /\.m?js$/
      })
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
    }),
    new CopyPlugin([{ from: './public', to: './' }]),
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          handler: 'CacheFirst',

          options: {
            cacheName: 'images',

            expiration: {
              maxEntries: 10
            }
          }
        }
      ]
    })
  ]
};
