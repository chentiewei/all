const superagent = require('superagent');
const charset = require('superagent-charset');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const book = require('../database/book').book;
const bookDetail = require('../database/book_details').bookDetail;
charset(superagent);
function ber(res, url) {
  superagent.get(url)
      .charset('gbk')
      .end(function (err, sra) {
        if (err) {
          res.send(err);
        }
        var $ = cheerio.load(sra.text, {decodeEntities: false});
        var items = {};
        $('.novellist ul li a').each(function (i, p) {
          items.shardid = i;
          items.bookname = $(p).html();
          items.link = $(p).attr("href");
          items.date = new Date();
          var query = new book(items);
          query.save(function (err) {
            if (err) {
              console.log(err);
              res.send('query.save出错了');
            }
          })
        })
       res.send('ok');
      })
}
function find(res){
  book.find(function(err,data){
    console.log(data[0]);
    if(err){res.send('find错误了')}
    for(var i=0;i<data.length;i++){
      var link=data[i].link;
      var shardid=data[i].shardid;
      var bookname=data[i].bookname;
      berConent(res,link,shardid,bookname)
    }
  });
  return res.send('find方法执行');
}
function berConent(res,link, bookname, shardid) {
  superagent.get(link)
      .charset('gbk')
      .end(function (err,body) {
        if (err) {
          res.send('1'+err);
        }
        var $ = cheerio.load(body.text, {decodeEntities: false});
        var details = {};
        details.shardid = shardid;
        details.bookname = bookname;
        details.writer = $('.info p:nth-child(2)').html();
        details.update = $('.info p:nth-child(4)').html();
        details.intro = $('.intro p').html();
        details.img = $('.fmimg img').attr('src');
        var query = new bookDetail(details);
        query.save(function (err) {
          if (err) {
            res.send(err);
          }
        })
      })
}
module.exports = {
  ber: ber,
  find:find
};