const express=require('express');
const bodyParser=require('body-parser');
const crawler=require('./controllers/crawler');
const app=express();
const user = require('./database/user').user;
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
app.get('/refer',function(req,res){
  res.render('refer',{ob: '请输入查询文字'})
})
/**爬虫代码**/
app.get('/o',function(req,res){
  //crawler.ber(res,'http://www.bequge.com/xiaoshuodaquan/');
  crawler.gen(res,'http://www.bequge.com/xiaoshuodaquan/');
})
/*插入*/
app.post('/inster',function(req,res){
  var query =new user({
    name: req.body.name,
    password: req.body.password,
    date: new Date()
  });
  query.save(function(err){
    if(err){
      console.log(err);
      res.render('index', { title: 'index' });
    }else{
      console.log('成功插入数据');
      res.render('user',{ title: 'user',code:'插入' });
    }
  })
})
/*更新*/
app.post('/update',function(req,res){
  var whereName={name: req.body.name};
  var query ={
    whereName,
    password: req.body.password,
    date: new Date()
  };
  user.update(whereName,query,function(err){
    if(err){
      console.log(err);
      res.render('index', { title: 'index' });
    }else{
      console.log('成功更新数据');
      res.render('user',{ title: 'user',code:'更新' });
    }
  })
})
/*删除*/
app.post('/delete',function(req,res){
  var query={name: req.body.name,}
  user.remove(query,function(err){
    if(err){
      console.log(err);
      res.render('index', { title: 'index' });
    }else{
      console.log('成功删除数据');
      res.render('user',{ title: 'user',code:'删除' });
    }
  })
})
/*查询*/
app.post('/refer',function(req,res){
  var query={name: req.body.name}
  if(!query){res.end();}
  user.find(query,function(err,data){
    if(err){
      console.log(err);
      res.render('index', { title: 'index' });
    }else{
      console.log('成功查询数据');
      console.log(data)
      if(data==''){data='数据没有查询到！！！！'}
      res.render('refer',{ ob: data });
    }
  })
})
app.listen(8008,function(){
  console.log('node服务器启动成功');
})