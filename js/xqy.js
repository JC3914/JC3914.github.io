"use strict";function GetQueryString(t){t=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(t);return null!=t?decodeURIComponent(t[2]):null}$(".nav03").mouseover(function(){$(".n3").stop().slideDown(300,"linear")}),$(".nav03").mouseout(function(){$(".n3").stop().slideUp(300,"linear")}),$(".n3").mouseout(function(){$(".n3").stop().slideUp(300,"linear")}),$(".xp").mouseover(function(){$(".app").stop().slideDown(300,"linear")}),$(".xp").mouseout(function(){$(".app").stop().slideUp(300,"linear")}),$(".app").mouseout(function(){$(".app").stop().slideUp(300,"linear")}),$(".app").mouseover(function(){$(".app").stop()}),$(".navmain").find(".xla").find("li").mouseover(function(){$(".xiala").stop().slideDown(300,"linear"),$(".xaladiv").find("ul").find("li").removeClass("active").eq(+$(this).index()+1).addClass("active")}),$(".navmain").find(".xla").find("li").mouseout(function(){$(".xiala").stop().slideUp(300,"linear")}),$(".xiala").mouseout(function(){$(".xiala").stop().slideUp(300,"linear")}),$(".xiala").mouseover(function(){$(".xiala").stop()}),$(window).scroll(function(){200<$(this).scrollTop()&&$(".hddb").css("display","block"),$(this).scrollTop()<=200&&$(".hddb").css("display","none")}),$(".hddb").click(function(){$(window).scrollTop(0)});var imgs=GetQueryString("img"),names=GetQueryString("name"),jg=GetQueryString("jg"),id=GetQueryString("id"),num=1;function getCart(){var t=localStorage.getItem("cart")||"[]";return JSON.parse(t)}function setCart(t){localStorage.setItem("cart",JSON.stringify(t))}console.log(id),$(".wsimg").attr("src",imgs),$(".xqh2").html(names),$(".jg").html(jg+"元"),localStorage.getItem("name")&&($(".a1a").remove(),$(".sp1").remove(),$(".zhmz").html(localStorage.getItem("name"))),$(".a1a").click(function(){location.href="./dl.html"}),$(".zhmz").click(function(){location.href="./dl.html"}),$(".gwccc").click(function(){location.href="./gwc.html"}),$(".nav03").click(function(){location.href="./gwc.html"}),$(".djjrgowc").click(function(){var t,n={product_id:id,product_name:names,product_img:imgs,product_price:jg,product_num:num},o=getCart(),i="";$.each(o,function(t,n){i=n.product_id,console.log(i)}),i==n.product_id?(t=getCart(),$.each(t,function(t,n){n.product_num=n.product_num+1}),setCart(t),alert("该商品已在购物车")):(o.push(n),setCart(o),alert("添加成功，快去购物车中查看吧"))});