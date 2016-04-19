window.onload = function()
{
	var lis = document.getElementsByClassName('lis');
	for(var i = 0 ; i < lis.length; i++){
		lis[i].timer = null;
		lis[i].alpha = 30;
		lis[i].onmouseover = function()
		{
			startShade(this,100);
		}
		lis[i].onmouseout = function()
		{
			startShade(this,30);
		}
	}
}
function startShade(obj,iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function()
		{
			if (obj.alpha<iTarget) {
				speed = 10;
			}
			else {
				speed = -10;
			}
			if (obj.alpha == iTarget) {
				clearInterval(obj.timer);
			}
			else {
				obj.alpha = obj.alpha+speed;
				obj.style.opacity = obj.alpha/100;
			}
		}, 30)
}
function startMove (obj,iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function()
		{
			var speed = (iTarget-obj.offsetWidth)/8;
			speed = speed > 0?Math.floor(speed):Math.ceil(speed);
            if (obj.offsetWidth == iTarget) {
            	clearInterval(obj.timer);
            }
            else{
            	obj.style.width = obj.offsetWidth + speed+'px';
            }
		}, 30)
}