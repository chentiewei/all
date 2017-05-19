/*var http=require('http');
var teacher=require('./teacher')
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'});
  /* "/favicon.ico"一定要用双引号
  if(req.url!=="/favicon.ico"){
    teacher.teacher(1,'张三');
    teacher.go();
    teacher.Tea();
    res.end('结束了');
  }
}).listen(8888);
console.log('端口8888打开');*/

/*rout.js
const http=require('http');
const url=require('url');
const rout=require('./rout');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'});
  if(request.url!=="/favicon.ico"){
    let pathName=url.parse(request.url).pathname;
    pathName=pathName.replace(/\//,'');
    console.log(pathName);
    rout[pathName]();

    response.end('结束了');
  }
}).listen(8899);
console.log('端口8899打开')*/

const http=require('http');
const url=require('url');
const rout=require('./rout');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'})
  if(request.url!=="/favicon.ico"){
    //s.readfileSync('./view/sync.html');
    //s.readfile('./view/sync.html',callback);
    let pathName=url.parse(request.url).pathname;
    pathName=pathName.replace(/\//,'');
    rout[pathName](request,response);
  }
}).listen(8898);
console.log('8898端口打开');
