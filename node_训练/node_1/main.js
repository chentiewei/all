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

/*读取写入文件
const http=require('http');
const url=require('url');
const rout=require('./rout');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
  if(request.url!=="/favicon.ico"){
    let pathName=url.parse(request.url).pathname;
    pathName=pathName.replace(/\//,'');
    if(pathName=='/'||!rout[pathName]){
      rout.nourl(request,response);
    }else{
        rout[pathName](request,response);
    }
  }
}).listen(8898);
console.log('8898端口打开');*/

/*读取图片
const http=require('http');
const url=require('url');
const rout=require('./rout');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'image/jpeg'});
  if(request.url!=="/favicon.ico"){
    rout.readImg(request,response);
  }
}).listen(8898);
console.'refs'+log('8898端口打开')*/

/*同步异步处理*/
const http=require('http');
const url=require('url');
const rout=require('./rout');
http.createServer(function(request,response){
  if(request.url!=="/favicon.ico"){
    let pathName=url.parse(request.url).pathname;/*request.url等于pathName*/
    pathName=pathName.replace(/\//,'');
    console.log(pathName)
    if(rout[pathName]) {
      try {
        rout[pathName](request, response);
      } catch (err) {
        console.log(String(err));
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        response.write(String(err))
        response.end();
      }
    }else{
      response.writeHead(200,{"Content-Type":'text/html;charset=utf-8'})
      response.write('文件不存在');
      response.end();
      let buf = new Buffer(15);
      console.log(buf);
      const len = buf.write("www.runoob.com");
      console.log(buf)
      let buf1 = new Buffer(26);
      console.log(buf1.toJSON('ascii'))
    }
  }
}).listen(8898);
console.log('8898端口打开');
