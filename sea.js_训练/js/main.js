define(function(require, exports, module) {
  require('jquery');
  var j1=require('1')
  exports.sayHello = function() {
    console.log('sayhttlo',j1.a());
    console.log($('body'))
  };
});
