const s=require('./modle/ajax_fx');
module.exports={
  callback:function (data,res){
    res.write(data);
    res.end('结束了');
  },
    login:function(req,res){
    s.readfile('./view/login.html',this.callback,res);
  },
  z:function(req,res){
    s.readfile('./view/down.html',this.callback,res);
  }
}
