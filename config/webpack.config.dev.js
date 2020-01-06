const path = require("path");
const merge = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, "../demos"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash:8].js",
  },
  mode: "development",
  plugins: [new HTMLWebpackPlugin({ template: path.resolve(__dirname, "../public/index.html") })],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 8077,
    open: true,
  },
});
