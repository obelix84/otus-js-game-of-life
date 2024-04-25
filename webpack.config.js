const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
        test: /\.(?:js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
