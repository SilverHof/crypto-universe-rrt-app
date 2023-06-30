const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

   plugins: [
      new MiniCssExtractPlugin(),
      new HTMLWebpackPlugin({
         template: './src/index.html'
      })
   ],

   module: {
      rules: [
         {
            test: /\.(s[ac]|c)ss$/i,
               use: [
                  {
                     loader: MiniCssExtractPlugin.loader,
                     options: { publicPath: "" },
                  },
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
               ]
         },

         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset',
         },

         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
               }
            }
         },
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['ts-loader']
         }
      ]
    },

   devtool: 'source-map',

   resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
   }
};