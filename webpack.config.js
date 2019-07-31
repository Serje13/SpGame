const webpack = require("webpack");
const path = require("path");

module.exports = {
  // Since webpack 4 we will need to set in what mode webpack is running
  mode: "development",
  // This will be the entry file for all of our React code
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:1234",
    "webpack/hot/only-dev-server",
    "./client/index.js"
  ],
  target: "web",
  devServer: {
    host: "localhost",
    port: 1234,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  // This will be where the final bundle file will be outputed
  output: {
    path: path.join(__dirname, "/server/public/js/"),
    filename: "bundle.js",
    publicPath: "http://localhost:1234/"
  },
  // Adding babel loader to compile our javascript and jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /(\.css$)/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        BUILD_TARGET: JSON.stringify("bundle")
      }
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  }
};
