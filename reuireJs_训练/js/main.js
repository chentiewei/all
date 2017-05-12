require.config({　　　　
	paths: {　　　　　　
		"jq": "jquery.min",
		"j1": "1",
		"j2": "2",
		"j3": "3"　　　
	}
});
require(['jq','j1','j2','j3'],function($,a,b,c){
	console.log(a.a(),b.b())
})
