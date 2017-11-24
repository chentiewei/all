var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var db =mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
db.on("open", function () {
  console.log("数据库连接成功");
});
db.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
module.exports=mongoose;