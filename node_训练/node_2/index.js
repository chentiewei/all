var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('hellow');
})

app.get('/loging',function(req,res){
    res.sendFile(__dirname+'/public/view/login.html');
})


app.set('foo', true);
console.log(app.get('foo'));

var server=app.listen(8088, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
