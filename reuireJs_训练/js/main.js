require.config({　　　　
	paths: {
		"jquery":'jquery.min',
		"j1": "1",
		"j2": "2",
		"j3": "3"　　　
	},
  shim:{
	  //插件需要用到的代码文件（例：jqueryUI需要用到jquery————————'jqertUI':['jquery']）
  }
});
require(['jquery','j1','j2','j3'],function($,a,b,c){
    console.log($('body'))
	  console.log(a.a(),b.b())
})
