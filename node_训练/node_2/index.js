var express=require('express');
var superagent=require('superagent');
var cheerio = require('cheerio');
var app=express();

app.use(express.static('public'));

app.get('/',function(req,res){
    superagent.get('https://cnodejs.org/')
        .end(function(err,sra){
            if(err){
                return next(err);
            }
            var $ = cheerio.load(sra.text, {decodeEntities: false});
            var items=[];
            $('#topic_list .topic_title').each(function(i,p){
                var item=$(p);
                items.push({
                    title:item.attr('title'),
                    href:item.attr('href'),
                    author:item.attr('author'),
                    html:item.html()
                })
            })
            $('#topic_list .user_avatar img').each(function(i,p){
                items[i].author=$(p).attr('title');
            })
            res.send(items);
        })

})

app.get('/loging',function(req,res){
    console.log(res.body)
    res.sendFile(__dirname+'/public/view/login.html');
})


app.set('foo', true);
console.log(app.get('foo'));

app.use(function(req,res,next){
    console.log('111');
    next();
    console.log('222');
});

app.use(function(req,res,next){
    console.log("333");
    next();
});


var server=app.listen(8088, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
