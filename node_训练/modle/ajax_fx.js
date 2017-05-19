var fs=require('fs');
module.exports={
  readfileSync:function(path){
      var data=fs.readFileSync(path,'utf-8');
      console.log(data);
      console.log('ok');
  },
  readfile:function(path,callback,res){
    fs.readFile(path,function (err,data) {
        if(err){
          console.log(err);
        }else{
          console.log(String(data));
          callback(data,res);
        }
    });
    console.log('异步请求执行中');
  }
}
