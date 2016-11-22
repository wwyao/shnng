/*
*匀速运动（待兼容加速运动和减速运动）
*ele：元素
*target:目标距离
*direction：运动的方向，取值：'v','h'（默认）
*velocity：运动速度
*/
function uniformMove(ele,target,direction,velocity,func){
	direction = direction || 'h';
	clearInterval(ele.timeId);
	ele.timeId = setInterval(function(){
		var offset = (direction === 'v')?ele.offsetTop:ele.offsetLeft;
		var dir = (direction === 'v')?'top':'left';
		var speed = target > offset?velocity:-velocity;
		if(offset === target) {
				clearInterval(ele.timeId);
				ele.style[dir] = target + "px";
				if(func){
					func();
				}
			}else {
				ele.style[dir] = offset + speed + "px";
			}
	},20);
}


/*
*缓冲运动
*ele：元素
*target:目标距离
*direction：运动的方向，取值：'v','h'（默认）
*velocity：运动速度，值越小速度越快，值越大速度越慢
*/
function bufferMove(ele,target,direction,velocity,func){
	direction = direction || 'h';
	clearInterval(ele.timeId);
	var speed;
	ele.timeId = setInterval(function(){
		var offset = (direction === 'v')?ele.offsetTop:ele.offsetLeft;
		var dir = (direction === 'v')?'top':'left';
		speed = (target - offset)/velocity;
		speed = speed > 0?Math.ceil(speed):Math.floor(speed);
		if(offset === target) {
			clearInterval(ele.timeId);
			if(func){
				func();
			}
		}else {
			ele.style[dir] = offset + speed + "px";
		}	
	},20);
}




/*
*属性变化过程的动画
*obj：目标元素
*target：属性的目标值
*att：要改变的属性名
*/
function attributeAnim(obj,json,vel,func) {
	var v = vel || 30;
	clearInterval(obj.timeId);
	obj.timeId = setInterval(function(){
		var isStop = true;
		for(var att in json){
			var start = (att === 'opacity')?parseInt(parseFloat(getStyle(obj,att))*100):parseInt(getStyle(obj,att));
			var speed = (json[att] - start)/7
			speed = speed > 0?Math.ceil(speed):Math.floor(speed);
			if(start != json[att]) {
				isStop = false;
			} 
			obj.style[att]  = (att === 'opacity')?(start + speed)/100:(start + speed) + "px";
		}	
		if(isStop){
			clearInterval(obj.timeId);
			if(func){
				func();
			}
		}
	},v);
}
//获取某元素的属性(该元素可以是外部，内部，内嵌)
function getStyle(obj,att) {
	if(obj.currentStyle){
		return obj.currentStyle[att];
	} else {
		return getComputedStyle(obj)[att];
	}
}


/*
*弹性运动(待测试)
*/
function flexMove(obj,att,target,velocity) {
	clearInterval(obj.timeId);
	var speed = 0;
	obj.timeId = setInterval(function(){
		speed += (target - parseInt(getStyle(att,style)))/8;
		//摩擦系数一般选0.7或0.5
		speed *= 0.7;
		if(Math.abs(speed) < 1 && Math.abs(target - parseInt(getStyle(att,style))) < 1) {
			clearInterval(obj.timeId);
			obj.style[att] = target + 'px';
		}else{
			obj.style[att] = parseInt(getStyle(att,style)) + speed + 'px';
		}
	},velocity);
}
/*
*碰撞及重力
*/