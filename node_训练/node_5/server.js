const express = require('express');
const expressStatic=require('express-static');
var app = express();
var users={
	'name':'ctw',
	'password':'123456'
}
app.get('/login',function(req,res){
	res.send(req.query['name'])
})
app.get('/',function(req,res,next){
	console.log('a');
	next();
})
app.get('/',function(req,res){
	console.log('b');
	res.send('调用成功');
})
app.use(expressStatic('./view'));
app.listen(8082, function() {
	console.log('8082启动成功')
});