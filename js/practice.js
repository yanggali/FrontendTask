
window.onload=function()
{
	var leftbox = document.getElementById('left'),
		rightbox = document.getElementById('right'),
		opcabox = document.getElementById('opca');
	rightbox.onmouseover = function()
	{
		startMove(0,10);
	}
	leftbox.onmouseout = function()
	{
		startMove(-200,-10);
	}
	opca.onmouseover = function()
	{
		startShade(100);
	}
	opca.onmouseout = function()
	{
		startShade(30);
	}
}
var timer = null;
function startMove(goal,speed) {
	clearInterval(timer);
	var leftbox = document.getElementById('left');
	var speed1 = (speed-leftbox.offsetWidth)/10;
	timer = setInterval(function() {
		if (leftbox.offsetLeft == goal) {
			clearInterval(timer);
		} else {
			leftbox.style.left = leftbox.offsetLeft + speed1 +'px';
		}
	},30)
}
var timer1=null;
var alpha = 30;
function startShade (iTarget) {
	clearInterval(timer1);
	var opcabox = document.getElementById('opca'),
		speed;
	timer1 = setInterval(function()
		{
			if (alpha > iTarget) {
				speed = -10;
			}
			else{
				speed = 10;
			}
			if (alpha == iTarget) {
				clearInterval(timer1);
			}
			else{
				alpha = alpha+speed;
				opcabox.style.filter = 'alpha(opacity:'+alpha+')';
				opcabox.style.opacity = alpha/100;
			}
		}, 30)
}