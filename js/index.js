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
	navClick();
};