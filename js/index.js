$(function(){
    var num=0;
    $(".arrowL").click(function(){
        num+=90;
        $("li").css({"transform":'rotateX('+num+'deg)'})
    })
    $(".arrowR").click(function(){
        num-=90;
        $("li").css({"transform":'rotateX('+num+'deg)'})
    })
})