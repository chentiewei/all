const s=require('./modle/ajax_fx');
module.exports={
  callback:function (data,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.write(data);
    res.end('结束了');
  },
  login:function(req,res){
    s.readfile('./view/login.html',this.callback,res);
  },
  z:function(req,res){
    s.readfile('./view/down.html',this.callback,res);
  },
  nourl:function (req,res) {
    s.readfile('./view/nourl.html',this.callback,res);
  },
  writefile:function(req,res){
    s.writefile('./view/write.txt','这是我写入的文件，谢谢！！',this.callback,res);
  },
  all:function (req,res) {
    s.readfile('./view/all.html',this.callback,res);
  },
  readImg:function (req,res) {
    res.writeHead(200,{'Content-Type':'image/jpeg'});
    s.readImg('./view/img/resd.jpg',res);
  }
}
