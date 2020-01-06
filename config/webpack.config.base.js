const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../demos")].filter(
          Boolean,
        ),
        use: "babel-loader",
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../demos")].filter(
          Boolean,
        ),
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "less-loader" },
        ],
      },
    ].filter(Boolean),
  },
};
