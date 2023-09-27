const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: "myLibrary",
    libraryTarget: "umd",
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|mts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
}