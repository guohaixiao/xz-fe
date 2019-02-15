// 实现点击全选功能
var $qx=$("#qx");
$qx.click(function(){      
  if(this.checked==true){
        $(".coll-product>li>input").prop('checked',true)  
    }else{
        $(".coll-product>li>input").prop('checked',false)     
    }
})
// 实现反选
var $cb=$(".coll-product>li>input");
    $cb.click(function(){
        var $qx=$("#qx");
        if(this.checked==false){
            $qx.prop('checked',false) 
        }else{
            var uncb=$(".coll-product>li>input:not(:checked)");
          
            if(uncb.length==0){
                $qx.prop('checked',true) 
            }
        }
    })
 //收藏导航点击事件移除兄弟class
    $(".coll-nav>ul>li>a").click(function(){
        $(this).addClass("active").parent().siblings().children("a").removeClass("active")
    });
 //正在热卖点击 移除兄弟class  
 $(".ul-tab-hd>li>a").click(function(){
    $(this).addClass("active").parent().siblings().children("a").removeClass("active")
});
// 取消收藏
$(".coll-product>li:nth-child(5)>p:last-child").click(function(){
    console.log($(".coll-product>li:nth-child(5)>p:last-child"))
   $(this).parent().parent().hide();
   var sum=$(".coll-nav>ul>li:nth-child(5) i").text()
   sum--;
   $(".coll-nav>ul>li:nth-child(5) i").text(sum)
})
// 给品牌收藏添加点击事件
$("#aa").click(function(){
    console.log(111)
    $("#sc").show();
    $(".g-cnt").hide();
})
// 给商品收藏添加点击事件
$("#bb").click(function(){
    console.log(111)
    $("#sc").hide();
    $(".g-cnt").show();
})