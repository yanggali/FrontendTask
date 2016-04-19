window.onload = fnAwards
var awards = new Array('ipad air2','iphone6s','3000元现金','1000元代金券','sony相机','kindle电子书','小米手环','50元话费'),
	timer,
	flag = 0;
function fnAwards () {
	var play = document.getElementById('play'),
		stop = document.getElementById('stop');
	play.onclick = fnPlay;
	
	stop.onclick = fnStop;
	//键盘事件
	document.onkeyup = fnKeyup;

}
function fnPlay() 
{
	timer = setInterval(function() {
		var id = Math.floor(Math.random() * 8),
			award = awards[id],
			show_award = document.getElementById('awards');
		show_award.innerHTML = award;
	}, 50);
	play.style.background = '#ccc';
	play.onclick = 'disabled';
}
function fnStop() {
	clearInterval(timer);
	play.style.background = '#ccf';
	play.onclick = fnPlay;
}
function fnKeyup (e) {
	e = e || window.event;
	if (e.keyCode == 13) {
		if (flag == 0) {
			fnPlay();
			flag = 1;
		}
		else{
			fnStop();
			flag = 0;
		}
	}
}
