window.onload = function(){
	var menu = document.querySelector('.menu');
	menu.isOpen = false;
	var ul = document.querySelector('#nav ul');
	var lis = document.querySelector('#nav ul li');
	menu.onclick = function(){
		if(!this.isOpen){
			this.isOpen = true;
			menu.src = 'img/menu2.png';
			ul.style.display = "block";
		}else{
			this.isOpen = false;
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