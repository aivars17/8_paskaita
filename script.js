var skaicius;
function go() {
	clear();
	skaicius = Math.floor(Math.random() * 4) + 1;
	document.getElementById(skaicius).style.backgroundColor = "red";
}
function back() {
	clear();
	if (!skaicius) {
	}	else  if (skaicius > 1) {
		skaicius--;
	}	else {
		skaicius = 4;
	}	
	document.getElementById(skaicius).style.backgroundColor = "red";
}
function next() {
	clear();
	if (!skaicius) {
	}	else if (skaicius < 4) {
		skaicius++;
	}	else {	
		skaicius = 1;
	} 
	document.getElementById(skaicius).style.backgroundColor = "red";
}
function clear() {
	for (var i = 1; i <= 4; i++) {
		document.getElementById(i).style.backgroundColor = "black";
	}
}
