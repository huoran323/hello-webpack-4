const path = require("path");

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  // 输出文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  // 配置多入口文件
  //   entry: {
  //     app: "./src/index.js",
  //     hello: "./src/hello.js"
  //   },
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "[name].bundle.js" //[name]为入口文件的key值，输出两个文件
  //   },

  module: {
    rules: [
      {
        test: /\.m?js$/, //以.js结尾
        exclude: /(node_modules|bower_components)/, //不包含node_modules中的文件
        use: {
          loader: "babel-loader"
          // options: {
          // babel插件的用法写在了.babelrc文件中
          //   plugins: [require('@babel/plugin-transform-arrow-functions')]
          // }
        }
      }
    ]
  },

  // 模式
  mode: "development"
};
