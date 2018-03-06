var express = require('express')
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/o', function (req, res) {
  res.send('成功');
})
app.get('/', function (req, res, next){
  superagent.get('https://muzhi.kuaizhan.com/78/65/p504380289297f8')
      .end(function (err, sra) {
        if (err) {
          return next(err);
        }
        var $ = cheerio.load(sra.text, {decodeEntities: false});
        var items = '';
        $('.mod-html:nth-child(2) p').each(function (i, p) {
          if(i==0||i==1||i==2){
            console.log('前3个删除');
          }else if ($(p).find('strong').html() == 'TVB汁源集合点我进入') {
            console.log('tvb标签删除')
          }else if($(p).children()=='<br>'||$(p).find('span').children()=='<br>'){
            console.log('为空删除')
          } else {
            items += '<p>' + $(p).html() + '</p>';
          }
        })
        res.render('movie',{ html: items });
      })
})
app.listen(5050,function(){
	console.log('启动成功');
});