//引入路径包
const path = require("path");
//引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中的一些配置信息都应该写在module.exports中
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //指定webpack打包时要使用到的模块
  module: {
    //指定要加载的一个规则
    rules: [
      {
        //test指定的是我们规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    //指定corejs的版本
                    corejs: "7",
                    //使用corejs的方式 "usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        //要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  //配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: "这是一个自定义的标题",
      template: "./src/index.html",
    }),
  ],
  mode: "development",

  //用来设置引用的模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
