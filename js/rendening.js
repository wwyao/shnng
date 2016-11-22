window.onload = function() {

	//导航栏
	var menu = document.querySelector('.menu');
	var navUl = document.querySelector('#nav ul');
	var navLis = document.querySelector('#nav ul li');
	var isOpen = false;
	menu.onclick = function(){
		if (!isOpen) {
			isOpen = true;
			menu.src = 'img/menu2.png';
			navUl.style.display = "block";
		}else{
			isOpen = false;
			menu.src = 'img/menu1.png';
			navUl.style.display = "none";
		}
		
	};
	for(var i = 0;i < navLis.length;i++){
		navLis.onclick = function(){
			navUl.style.display = 'none';
		};
	}
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
	// var isGetMore = true;
	// while(isGetMore){
	// 	var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
	// 	console.log(scrollT + document.body.offsetHeight,ul.offsetHeight+ul.offsetTop);
	// 	var mi = min();
	// 	if(scrollT + document.body.offsetHeight >= lis[mi].offsetHeight+ul.offsetTop && pIndex < picSrc.length){
	// 		add(lis[mi],picSrc[pIndex]);
	// 		pIndex++;
	// 		for(var i = 0;i < liItem.length;i++){
	// 			liItem[i].tag = i;
	// 			liItem[i].onmouseenter = function(){
	// 				mask[this.tag].style.display = "flex";
	// 			};
	// 			liItem[i].onmouseleave = function(){
	// 				mask[this.tag].style.display = "none";
	// 			};
	// 		}
	// 	}else{
	// 		isGetMore = false;
	// 	}
	// }
	// for(var i = 0;i < liItem.length;i++){
	// 	liItem[i].tag = i;
	// 	liItem[i].onmouseenter = function(){
	// 		mask[this.tag].style.display = "flex";
	// 	};
	// 	liItem[i].onmouseleave = function(){
	// 		mask[this.tag].style.display = "none";
	// 	};
	// }

	for (var i = 0;i < 9; i++) {
		var mi = min();
		add(lis[mi],picSrc[pIndex]);
		pIndex++;
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
	//达到底部加载
	
	window.onscroll = function(){
		var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(scrollT + document.body.offsetHeight,ul.offsetHeight+ul.offsetTop);
		var mi = min();
		if(scrollT + document.body.offsetHeight >= lis[mi].offsetHeight+ul.offsetTop && pIndex < picSrc.length){
			add(lis[mi],picSrc[pIndex]);
			pIndex++;
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
	};
	function min(){
		var index = 0;
		for(var i = 0;i < lis.length-1;i++){
			if(lis[i].offsetHeight > lis[i+1].offsetHeight){
				index = i+1;
			}
		}
		return index;
	}
	//添加一张图片
	
	function add(obj,src){
		var isAdd = true;
		var img = document.createElement('img');
		img.src = src;
		var div = document.createElement('div');
		var span = document.createElement('span');
		div.className = 'li-item';
		span.className = 'mask';
		span.innerHTML = "<strong>图片标题</strong>"
		// while(isAdd){
		// 	img.onload = function(){
		// 		isAdd = false;
		// 	};	
		// }
		div.appendChild(img);
		div.appendChild(span);
		obj.appendChild(div);
		
		
	}
	
};