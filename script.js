var vieta = [];
var skaicius;
function go() {
	clear();
	skaicius = Math.floor(Math.random() * 4) + 1;
	
	document.getElementById(skaicius).style.backgroundColor = "red";
	//document.getElementById('cia').innerHTML = vieta;
}
function back() {
	clear();
	//check_gameover();
	if (skaicius <= 1) {
		document.getElementById(4).style.backgroundColor = "red";
		back();
	}	else  if (skaicius > 1) {
		skaicius--;
	}	else {
		skaicius++;
	}
	document.getElementById(skaicius).style.backgroundColor = "red";
	
}
function next() {
	clear();
	//vieta.push(skaicius);
	if (skaicius >= 4) {
		document.getElementById(1).style.backgroundColor = "red";
		next();
	}	else if (skaicius < 4) {
		skaicius++;
	}	else {
		skaicius--;
	}
	document.getElementById(skaicius).style.backgroundColor = "red";
}
function clear() {
	for (var i = 1; i <= 4; i++) {
		document.getElementById(i).style.backgroundColor = "black";
	}
}
//function check_gameover() {
//	if (var b = 1; b = skaicius.length; b++) {
//		document.getElementById(b).style.backgroundColor = "red";
	//} 
//}