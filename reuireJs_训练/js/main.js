require.config({　　　　
	paths: {
		"jquery":'jquery.min',
		"j1": "1",
		"j2": "2",
		"j3": "3"　　　
	},
  shim:{
  }
});
require(['jquery','j1','j2','j3'],function($,a,b,c){
    console.log($('body'))
	  console.log(a.a(),b.b())
})
