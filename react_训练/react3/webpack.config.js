// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path是node.js中提供的处理文件路径的小工具。 (http://www.runoob.com/nodejs/nodejs-path-module.html)
const path = require('path');
module.exports = {
  // 项目入口，webpack从此处开始构建
  entry: {
    main: path.join(__dirname, 'src/index.js'), // 指定入口，可以指定多个。参考webpack文档
  },
  output: {
    path: path.join(__dirname, "dist"), // bundle生成(emit)到哪里
    filename: "bundle.js", // bundle生成文件的名称
  },
}
