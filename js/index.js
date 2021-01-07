$(".nav03").mouseover(function () {
    $(".n3").stop().slideDown(300, "linear")
})
$(".nav03").mouseout(function () {

    $(".n3").stop().slideUp(300, "linear")
})
$(".n3").mouseout(function () {

    $(".n3").stop().slideUp(300, "linear")
})
//app
$(".xp").mouseover(function () {
    $(".app").stop().slideDown(300, "linear")
})

$(".xp").mouseout(function () {
    $(".app").stop().slideUp(300, "linear")
})

$(".app").mouseout(function () {
    $(".app").stop().slideUp(300, "linear")
})
$(".app").mouseover(function () {
    $(".app").stop()
})

//下拉
$(".navmain").find("ul").find("li").mouseover(function () {
    $(".xiala").stop().slideDown(300, "linear")
    $(".xaladiv").find("ul").find("li")
        .removeClass("active")
        .eq(+($(this).index()) + 1)
        .addClass("active")

})
$(".navmain").find("ul").find("li").mouseout(function () {
    $(".xiala").stop().slideUp(300, "linear")
})
$(".xiala").mouseout(function () {
    $(".xiala").stop().slideUp(300, "linear")
})
$(".xiala").mouseover(function () {
    $(".xiala").stop()
})
// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    //   direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    effect: 'fade',
    speed:300,
    disableOnInteraction:false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //   // 如果需要滚动条
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
})
//鼠标覆盖停止自动切换
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}

//鼠标离开开始自动切换、、
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}
// 小轮播图
var uu=document.querySelector("#u")//获取元素ul
var num=0;//移动距离
var timer=setInterval(aa,10);//设置定时器
function aa(){
   
    uu.style.left=num+"px"

    num=num-2;
    if(num<=-1300){
        num=0;
    }
 

}

//鼠标移入 停止

uu.onmouseover=function(){
    clearInterval(timer);
}
//鼠标移出 动

uu.onmouseout=function(){
     timer=setInterval(aa,10);
}
//热门 影音
$(".felei").find("li").mouseover(function(){
    
})
//回到顶部
 // 1页面滚到300px 的时候 显示回到顶部按钮
 $(window).scroll(function(){ 
    if($(this).scrollTop()>300){
        //显示回到顶部按钮
        $(".hddb").css("display","block")
    }
    if($(this).scrollTop()<=300){
        //显示回到顶部按钮
        $(".hddb").css("display","none")
    }
})
//  2点击回到顶部按钮，页面滚动回顶部
$(".hddb").click(function(){
    $(window).scrollTop(0);
})
//登录注册
if(localStorage.getItem("name")){
    //如果本地存储有name 说明注册过了
    // 删除一二子元素
    //第三个子元素的值改成本地存储的值
    $(".a1a").remove();
    $(".sp1").remove();
    $(".zhmz").html(localStorage.getItem("name"));
    
}
//退出登录
$(".tcdl").click(function(){
   
    localStorage.removeItem("name");
    window.location.reload(); 
})

$(".a1a").click(function(){
    location.href="./dl.html"
})
$(".zhmz").click(function(){
    location.href="./zc.html"
})
// 给购物车绑定连接
$(".gwccc").click(function(){
    location.href="./gwc.html"
})
$(".nav03").click(function(){
    location.href="./gwc.html"
})
//登录 
$(".a1").click(function(){
    location.href="./dl.html"
})
//注册
$(".a2").click(function(){
    location.href="./zc.html"
})
//倒计时
var showtime = function () {
    var nowtime = new Date(); //获取当前时间
    var year=nowtime.getFullYear();//年
    var month=nowtime.getMonth()//月
    var date=nowtime.getDate();//日
    var hours=nowtime.getHours();//时
        endtime = new Date(year,month,date,hours+1);  //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
        lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
        leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
        lefts = Math.floor(lefttime/1000%60);  //计算秒数
        $(".hours").html(lefth)
        $(".fen").html(leftm)
        $(".miao").html(lefts)
}   
    // var a= lefth + ":" + leftm + ":" + lefts
    setInterval(showtime,1000)

    // 用ajax 渲染
    $.ajax({
        url:"../api/sj.json",
        dataType:"json",
        success:function(data){
            console.log(data)//
         $.each(data,function(index,item){//这里要遍历的元素data是一个数组 index是数组里的索引 item遍历到的每一项
           
        $(".xaladiv").children("ul").children("li").eq(1).append(`
        <a href="#">
            <div><img
                    src="${item.sj_img}"
                    alt=""></div>
            <div>${item.sj_name}</div>
            <div>${item.sj_jage}</div>
        </a>
      
   `)
         })
        }
})
//ajax 渲染二
$.ajax({
    url:"../api/ds.json",
    dataType:"json",
    success:function(data){
        console.log(data);
        $.each(data,function(index,item){
            $(".disi").prepend(`
            <li class="yy">
            <a href="./xqy.html?img=${item.ds_img}&name=${item.ds_name}&jg=${item.ds_jage}&id=${item.ds_id}">
                <div class="im">
                    <img src="${item.ds_img}"alt="">
                </div>
                <h3>${item.ds_name}</h3>
                <p class="pp1">${item.ds_misu}</p>
                <p class="pp2">
                    <span>${item.ds_jage}</span>元
                    <span>起</span>
                </p>
            </a>
        </li>
            `)
        })
    }
})
//ajax 渲染三
$.ajax({
    url:"../api/sj2.json",
    dataType:"json",
    success:function(data){
        console.log(data);
        $.each(data,function(index,item){
            $(".xmsjsj").prepend(`
            <li class="yy">
            <a href="./xqy.html?img=${item.ds_img}&name=${encodeURIComponent(item.ds_name)}&jg=${item.ds_jage}&id=${item.ds_id}">
                <div class="im">
                    <img src="${item.ds_img}"alt="">
                </div>
                <h3>${item.ds_name}</h3>
                <p class="pp1">${item.ds_misu}</p>
                <p class="pp2">
                    <span>${item.ds_jage}</span>元
                    <span>起</span>
                </p>
            </a>
        </li>
            `)
        })
    }
})