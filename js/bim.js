window.onload = function() {
	var main = document.querySelector('#main');
	var sections = document.querySelectorAll('.section');
	var topBtn = document.querySelector('.top');
	var footer = document.querySelector('#footer');

	//导航栏
	navClick();
	//内容框
	var divs = document.querySelectorAll('.section>div');
	var bodyOffsetheight = document.body.offsetHeight || document.documentElement.offsetHeight;
	var sh = bodyOffsetheight - 70;
	for(var i = 0;i < sections.length;i++) {
		sections[i].style.height = sh + 'px';
	}
	var isTop = true,isBottom = false;
	var count = 0;
	var aim = 0;
	window.onwheel = function(ev) {
		var e = ev || event;
		if(e.deltaY > 0) {
			if(isTop){
				count = 0;
				aim = -120;
				attributeAnim(main,{marginTop:-120});
				isTop = false;
			}else {
				var isbb = true; 
				if(count < 4){
					isbb = false;
					count++;
					var h = aim - sh;
					aim = h;
					initOpacity(divs);
					attributeAnim(main,{marginTop:h},30,attributeAnim(divs[count],{opacity:100},150));
					// console.log(count);
				}
				if(count === 4 && !isBottom && isbb){
					var h = aim-footer.offsetHeight;
					aim = h;
					// console.log('in');
					attributeAnim(main,{marginTop:h});
					isBottom = true;

				}
			}
		}else {
			if(isBottom){
				count = 4;
				var h = aim + footer.offsetHeight;
				aim = h;
				attributeAnim(main,{marginTop:h});
				isBottom = false;
			}else {
				if(count > 0){
					count--;
					var h = aim + sh;
					aim = h;
					initOpacity(divs);
					attributeAnim(main,{marginTop:h},30,attributeAnim(divs[count],{opacity:100},150));
					console.log(count);
				}else if(count === 0 && !isTop){
					count = 0;
					aim = 50;
					attributeAnim(main,{marginTop:0});
					isTop = true;
				}
			}
		}
	};

	topBtn.onclick = function(){
		attributeAnim(main,{marginTop:0});
		divs[0].style.opacity = '1';
		isTop = true;
		isBottom = false;
	};
	function initOpacity(array){
		for(var i = 0;i < array.length;i++){
			attributeAnim(array[i],{opacity:0});
		}
	}
};