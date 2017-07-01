/**
 * Created by Administrator on 2017/6/2.
 */
seajs.config({
  base: "./js",
  paths:{
    'j3':'j3'//公共的目录路径
  },
  alias: {
    "jquery": "jquery.min.js",
    "j2":"2.js",
    "3":"j3/3.js"
  }
})
/*直接这样写 就是直接引入js*/
seajs.use(['./js/main','jquery','j2','3']);

