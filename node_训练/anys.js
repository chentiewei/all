/*串行无关联
var async=require('async');
function exec() {
  async.series({
    one:function(done){
      var i=0;
      setInterval(function () {
        i++;
        console.log('aaa'+new Date());
        if(i==3){
          clearTimeout(this);
          done(null,'one,ok');
        }
      },1000);
    },
    two:function (done) {
      var j=0;
      setInterval(function () {
        j++;
        console.log('bbb'+new Date());
        if(j==3){
          clearTimeout(this);
          done(null,'two,ok');
        }
      },1000);
    }
  },function (err,res) {
        console.log(err);
        console.log(res);
    }
  )
}*/
/*并行无关联
var async=require('async');
function exec() {
  async.parallel(
    {
      one:function(done){
        var i=0;
        setInterval(function () {
          i++;
          console.log('aaa'+new Date());
          if(i==3){
            clearTimeout(this);
            done(null,'one,ok');
          }
        },1000);
      },
      two:function (done) {
        var j=0;
        setInterval(function () {
          j++;
          console.log('bbb'+new Date());
          if(j==3){
            clearTimeout(this);
            done(null,'two,ok');
          }
        },1000);
      }
    },
    function (err,res) {
      console.log(err);
      console.log(res);
    }
  )
}*/
/*串行有关联方法*/
var async=require('async');
function exec() {
  async.waterfall(
    [
      function(done){
        var i=0;
        setInterval(function () {
          i++;
          console.log('aaa'+new Date());
          if(i==3){
            clearTimeout(this);
            done(null,'one,ok');
          }
        },1000);
      },
      function (preValue,done) {
        var j=0;
        setInterval(function () {
          j++;
          console.log(preValue+'='+new Date());
          if(j==3){
            clearTimeout(this);
            done(null,preValue+',two,ok');
          }
        },1000);
      },
      function (preValue,done) {
        var z=0;
        setInterval(function () {
          z++;
          console.log(preValue);
          if(z==3){
            clearTimeout(this);
            done(null,preValue+',three,ok');
          }
        },1000);
      }
    ],function (err,res) {
      console.log(err);
      console.log(res);
    }
  )
}
exec();
