var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var user = require('./database/user');
app.set('views', __dirname+'/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
  res.render('index', { title: 'index' });
})
app.get('/login',function(req,res){
  res.render('login',{ title: 'login' });
})
app.post('/ucenter',function(req,res){
  var query =new user({
    name: req.body.name,
    password: req.body.password
  });
  query.save(function(err){
    if(err){
      console.log(error);
      res.render('index', { title: 'index' });
    }else{
      console.log('成功插入数据');
      res.render('user',{ title: 'user' });
    }
  })
})
app.listen(8008,function(){
  console.log('node服务器启动成功');
})