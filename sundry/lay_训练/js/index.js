//layui模块的定义
layui.define(["api","element","apj"],function(exports){
    var element = layui.element(); //导航的hover效果、二级菜单等功能，需要依赖element模块
    element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
    });
    layui.apj();
    layui.api();
    exports('index',{});
});