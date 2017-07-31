var fs=require('fs');
module.exports={
  readfileSync:function(path){/*同步读文件*/
      var data=fs.readFileSync(path,'utf-8');
      console.log(data);
      console.log('ok');
  },
  readfile:function(path,callback,res){/*异步读文件*/
      fs.readFile(path,function (err,data) {
        if(err){
          console.log(String(err));
          callback('文件不存在',res);
        }else{
          console.log(String(data));
          callback(data,res);
        }
      });
    console.log('异步请求执行中');
  },
  readImg:function (path,res) {/*异步读图片*/
    fs.readFile(path,'binary',function(err,data){
      if(err){
        console.log(err);
      }else{
        res.write(data,'binary');
        res.end('读取图片结束！');
      }
    })
  },
  writefile:function(path,data,callback,res){/*写文件*/
    fs.writeFile(path,data,function(err){
      if(err){
        console.log(err);
      }else{
        console.log('成功写入');
        callback(data,res);
      }

    })
  }
}
