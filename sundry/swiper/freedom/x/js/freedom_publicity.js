/**
 * Created by louis on 2016/12/28.
 */
function add(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
}
var mask=0;
function load(){
    if(mask==80){
        $(".mask1").fadeOut(1000);
        add();
    }
}
var imgsEnemy1 = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
downloadResource();
function downloadResource(){
    imgsEnemy1[0].src ='img/img1/bg.png';
    imgsEnemy1[0].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[1].src ='img/img2/bg.png';
    imgsEnemy1[1].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[2].src ='img/img3/bg.png';
    imgsEnemy1[2].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[3].src ='img/img4/bg.png';
    imgsEnemy1[3].onload= function(){
        mask+=10;
        load()
    };
    imgsEnemy1[4].src ='img/img5/bg.png';
    imgsEnemy1[4].onload= function(){
        mask+=10;
        load()
    }
    imgsEnemy1[5].src ='img/img6/bg.png';
    imgsEnemy1[5].onload= function(){
        mask+=10;
        load()
    }
    imgsEnemy1[6].src ='img/img7/bg.png';
    imgsEnemy1[6].onload= function(){
        mask+=10;
        load()
    }
    imgsEnemy1[7].src ='img/img7/loading-188.gif';
    imgsEnemy1[7].onload= function(){
        mask+=10;
        load()
    }
}