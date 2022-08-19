//console
$(function() {
	    console.log("%c JingNuoWang031 %c", "background:#00aaff; color:#ffffff", "", "https://jnw031.github.io");
	    console.log("%c 本站github源码 %c", "background:#ff0000; color:#ffffff", "", "https://github.com/jnw031/jnw031.github.io");
		console.log("%c 初始live2d模型 %c", "background:#00ff00; color:#ffffff", "",randmodel);
	});	

// Smooth scrolling -->
function scrollToId(id,time){
    var time = time || 0;
    $("html,body").animate({scrollTop: $("#"+id).offset().top}, time);
}


//change menu-style 
var showmenu = false;
	$(document).scroll(function() {
		var sctop = window.screen.availHeight - 160;
		if($(this).scrollTop() > sctop) {
			$(".header-logo").css({"background":"#FFFFFF", "color":"#333333", "box-shadow":"0px 0px 8px rgba(0,0,0,0.2)"});
			$(".header-logo .logo a").css({"color":"#333333"});
			$(".header-logo .menu .item").css({"color":"#333333"});}
		else {$(".header-logo").css({"background":"rgba(0,0,0,0)", "color":"#FFFFFF", "box-shadow":"0px 0px 0px rgba(0,0,0,0)"});
			$(".header-logo .menu .item").css({"color":"#FFFFFF"});
			$(".header-logo .logo a").css({"color":"#FFFFFF"});}});
		function hidenav(){
			$(".header-logo .menunav").css({"left":"100vw"});
			showmenu = false;}
		function shownav() {
			if(showmenu) {
				$(".header-logo .menunav").css({"left":"100vw"});
				showmenu = false;} 
			else {$(".header-logo .menunav").css({"left":"0vw"});
				showmenu = true;}}
//change bg_URL -->
		function randomNum(minNum,maxNum){
			//生成从minNum到maxNum的随机数
		    switch(arguments.length){ 
		        case 1: return parseInt(Math.random()*minNum+1,10); break; 
		        case 2: return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); break; 
		        default: return 0; break; 
			} 
		} 
		function isRepeat(arr){
		var hash = {};
			for(var i in arr) {
				if(hash[arr[i]]) //hash 哈希
					return true;
					hash[arr[i]] = true;
			}
			return false;
		}
		function preloadImg(srcArr){
		    if(srcArr instanceof Array){
		        for(var i=0; i<srcArr.length; i++){
		            var oImg = new Image();
		            oImg.src = srcArr[i];
		        }
		    }
		}
		var arr0=new Array();
		function randomIMG(int){
			arr0[int] = randomNum(1,18);
			while(isRepeat(arr0)){arr0[int] = randomNum(1,13);}//防止图片重复
			var github = 'https://jnw031.github.io/img/banner_bg';
			var imgURL = github + arr0[int] +".jpg";
			//[div]document.getElementById("BackgroundArea").style.backgroundImage="url("+imgURL+")";
			document.getElementById("img"+int).src= imgURL;
			preloadImg([imgURL]);
		}		
		////visiter

			script5=document.createElement("script");
			script5.setAttribute("type","text/javascript");
			script5.setAttribute("src","42.192.91.114:10746/js");
			document.head.appendChild(script5);
			script5.onload=script5.onreadystatechange=function(){
				if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){
					script4=document.createElement("script");
					script4.setAttribute("type","text/javascript");
					script4.setAttribute("src","42.192.91.114:10746/js_record");
					document.head.appendChild(script4);
					script4.onload=script4.onreadystatechange=function(){
					if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){
						setTimeout(function(){
							console.log("%c 访客数量 %c","background:#00aaff; color:#ffffff", "",visiter_data.total_people);
							console.log("%c 总访问量 %c","background:#00aaff; color:#ffffff", "",visiter_data.total_times);
						},2000)

				}
			}
			
				}
			}
		
			