window.onload = function() {

	//导航栏
	navClick();
	//轮播图
	var picWrap = document.getElementById('pic-wrap');
	var pic = document.getElementsByClassName('pic');
	var navList = document.getElementsByClassName('pic-nav-list');
	var iCurrent = 0;
	var target = 0;
	var timeId = null;
	navList[iCurrent].style.background = "#FF493C";
	timeId = interval();
	for(var j = 0;j < navList.length;j++) {
		navList[j].tag = j;
		navList[j].onclick = function(){
			clearInterval(timeId);
			iCurrent = this.tag;
			attributeAnim(picWrap,{marginLeft:- iCurrent * pic[0].offsetWidth},function(){
				timeId = interval();
			});
			show(iCurrent);
		};
	}
	function show(tag){
		for(var i = 0;i < navList.length;i++){
			navList[i].style.background = "#2F0E0B";
		}
		navList[tag].style.background = "#FF493C";
	}
	function interval() {
		return setInterval(function(){
			if(iCurrent >= 2 ){
				target = 0;
				iCurrent = 0;
			}else{
				iCurrent++;
			}
			target = -pic[0].offsetWidth * iCurrent;
			attributeAnim(picWrap,{marginLeft:target});
			show(iCurrent);	
		},3000);
	}
	//瀑布流
	var ul = document.querySelector('#flow-wrap');
	var lis = document.getElementsByClassName('flow-item');
	var liItem = document.getElementsByClassName('li-item');
	var mask = document.getElementsByClassName('mask');
	var picSrc = ['img/P_01.jpg','img/P_02.jpg','img/P_03.jpg','img/P_04.jpg','img/P_05.jpg','img/P_06.jpg','img/P_07.jpg','img/P_08.jpg','img/P_09.jpg','img/P_010.jpg','img/P_011.jpg','img/P_012.jpg','img/P_013.jpg','img/P_014.jpg','img/P_015.jpg'];
	var pIndex = 0;
	// controlMask();
	for(var i = 0;i < 3;i++){
		var count = pIndex;
		var newLi = document.createElement('li');
		newLi.className = 'flow-item';
		while(pIndex - count < 3){
			add(newLi,picSrc[pIndex]);
			pIndex++;
		}
		ul.appendChild(newLi);
		controlMask();
	}
	//达到底部加载
	window.onscroll = function(){
		var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
		var screenHeight = document.body.offsetHeight || document.documentElement.offsetHeight;
		if(scrollT + screenHeight >= ul.offsetHeight+ul.offsetTop && pIndex < picSrc.length){
			var count = pIndex;
			var newLi = document.createElement('li');
			newLi.className = 'flow-item';
			while(pIndex - count < 3){
				add(newLi,picSrc[pIndex]);
				pIndex++;
			}
			ul.appendChild(newLi);
			controlMask();
		}
	};
	// 蒙版出现与消失
	function controlMask(){
		for(var i = 0;i < liItem.length;i++){
			liItem[i].tag = i;
			liItem[i].onmouseenter = function(){
				mask[this.tag].style.display = "flex";
			};
			liItem[i].onmouseleave = function(){
				mask[this.tag].style.display = "none";
			};
		}
	}
	//添加一张图片
	function add(obj,src){
		var img = document.createElement('img');
		img.src = src;
		var div = document.createElement('div');
		div.className = 'li-item';
		var span = document.createElement('span');
		div.className = 'li-item';
		span.className = 'mask';
		span.innerHTML = "<strong>图片标题</strong>"
		div.appendChild(img);
		div.appendChild(span);
		obj.appendChild(div);
	}
	
};