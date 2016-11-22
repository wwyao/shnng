window.onload = function(){
	var listItem = document.querySelectorAll('.li-item');
	var listItemImg = document.querySelectorAll('.li-item img');
	for(var i = 0;i < listItem.length;i++){
		listItem[i].tag = i;
		listItem[i].onmouseenter = function(){
			this.style.color = "#000";
			listItemImg[this.tag].src = 'img/en_a'+(this.tag+1)+'_active.jpg';
			listItemImg[this.tag].style.cssText = "border-color:#C5D609";
		};
		listItem[i].onmouseleave = function(){
			this.style.color = "#A6A6A6";
			listItemImg[this.tag].src = 'img/en_a'+(this.tag+1)+'.jpg';
			listItemImg[this.tag].style.cssText = "border-color:#DADADA";
		};
	}
	//导航栏
	var menu = document.querySelector('.menu');
	var ul = document.querySelector('#nav ul');
	var lis = document.querySelector('#nav ul li');
	var isOpen = false;
	menu.onclick = function(){
		if (!isOpen) {
			isOpen = true;
			menu.src = 'img/menu2.png';
			ul.style.display = "block";
		}else{
			isOpen = false;
			menu.src = 'img/menu1.png';
			ul.style.display = "none";
		}
		
	};
	for(var i = 0;i < lis.length;i++){
		lis.onclick = function(){
			ul.style.display = 'none';
		};
	}
};