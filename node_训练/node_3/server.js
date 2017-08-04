var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.readFile(__dirname+'/public/index.html');
    res.end();
})
app.get('/send/:id',function(){
    res.readFlie(__dirname+'/public/index.htmnl');
})
var server=app.listen(8899,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host, port)
});