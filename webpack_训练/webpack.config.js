/*Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。*/
module.exports={
  //__dirname是nodejs里的一个全局变量，他指向的是我们的根目录
  //entry表示入口文件位置
  entry:__dirname+"/app/main.js",
  output:{
      //打包后的文件放置的位置
      path:__dirname+"/public",
      //打包后我们的文件名字
      filename:"webpack.js"
  },
  module: {
    /*webpack 1.0
    loaders:[
     {
     //正则遇到 .json的文件用json-loader来解析
     test:/\.json$/,
     //跳过exclude中的文件。
     exclude: /(node_modules)/,
     //包含include中的文件
     //include: '',
     //用什么loader来解析
     loader:"json-loader",
     /*---------
     ExtractTextPlugin的extract方法有两个参数，第一个参数是经过编译后通过style-loader单独提取出文件来，而第二个参数就是用来编译代码的loader，
     css-loader!xxx-loader 表示先执行xxx-loader再css-loader
     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
     -------
     },
     {
     test:/\.css$/,
     loader:"style-loader!css-loader!postcss-loader",
     }
     ]
     },
     postcss: function () {
     return  [
     require('autoprefixer')
     ]
     }*/
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader:"style-loader"},
          {loader:"css-loader"},
        ]
      },
      {
        test: /\.json$/,
        use:"json-loader"
      }
    ]
  }
}
