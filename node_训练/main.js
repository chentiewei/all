var http=require('http');
var teacher=require('./teacher')
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'});
  /* "/favicon.ico"一定要用双引号*/
  if(req.url!=="/favicon.ico"){
    teacher.teacher(1,'张三');
    teacher.go();
    teacher.Tea();
    res.end('结束了');
  }
}).listen(8888);
console.log('端口8888打开');
