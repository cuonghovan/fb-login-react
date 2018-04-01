/*global module require process __dirname: true*/
const path = require("path");
const HotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
const ProgressPlugin = require("progress-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const ENV_DEVELOPMENT = NODE_ENV === "development";
const ENV_PRODUCTION = NODE_ENV === "production";
const config = (module.exports = {});

const loaderRules = {
  js: {
    test: /\.js/,
    loader: ["babel-loader"],
    exclude: "/node_modules"
  },
  jsx: {
    test: /\.jsx/,
    loader: "babel-loader",
    exclude: "/node_modules"
  },
  cssInternal: {
    test: /\.scss/,
    loader: "style-loader!css-loader!sass-loader"
  },
  cssExternal: {
    test: /\.scss/,
    loader: ExtractTextPlugin.extract("css-loader!sass-loader")
  }
};

config.resolve = {
  extensions: [".js", ".json"],
  modules: [path.resolve("."), "node_modules"],
  alias: {
    Components: path.join(__dirname, "src/views/components"),
    Utils: path.join(__dirname, "src/utils"),
    State: path.join(__dirname, "src/state")
  }
};

//
// ─── DEVELOPMENT AND PRODUCTION ─────────────────────────────────────────────────
//
if (ENV_DEVELOPMENT || ENV_PRODUCTION) {
  config.entry = {
    main: ["babel-polyfill", "./src/main.js"]
  };
  config.module = {
    loaders: [loaderRules.js, loaderRules.jsx]
  };
  config.output = {
    filename: "[name].js",
    path: path.resolve("./build"),
    publicPath: "/"
  };
  config.plugins = [
    new ProgressPlugin(true),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    })
  ];
}

//
// ─── DEVELOPMENT ────────────────────────────────────────────────────────────────
//
if (ENV_DEVELOPMENT) {
  config.devtool = "source-map";
  config.entry.main.unshift(
    "react-hot-loader/patch",
    "webpack/hot/dev-server",
    "webpack-hot-middleware/client"
  );
  config.module.loaders.push(loaderRules.cssInternal);
  config.plugins.push(new HotModuleReplacementPlugin());
}

//
// ─── PRODUCTION ─────────────────────────────────────────────────────────────────
//
if (ENV_PRODUCTION) {
  config.devtool = "hidden-source-map";
  config.output.filename = "[name].[chunkhash].js";
  config.module.loaders.push(loaderRules.cssExternal);
  config.plugins.push(
    new WebpackMd5Hash(),
    new ExtractTextPlugin("styles.[contenthash].css", {
      allChunks: true
    })
  );
}

module.exports = config;
