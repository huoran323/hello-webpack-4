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

  // 模式
  mode: "development"
};
