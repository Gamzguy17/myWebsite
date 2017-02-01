/*Functions to obtain the pressed key image*/ 
function changeQ(){
	var img = document.getElementById("keyq");
	img.src  = "images/keyqon.png";
}

function changeW(){
	var img = document.getElementById("keyw");
	img.src  = "images/keywon.png";
}

function changeE(){
	var img = document.getElementById("keye");
	img.src  = "images/keyeon.png";
}

function changeR(){
	var img = document.getElementById("keyr");
	img.src  = "images/keyron.png";
}

function changeT(){
	var img = document.getElementById("keyt");
	img.src  = "images/keyton.png";
}

function changeY(){
	var img = document.getElementById("keyy");
	img.src  = "images/keyyon.png";
}
/***********************************************/
/*Functions to obtain the unpressed key images*/
function changeQAgain(){
	var img = document.getElementById("keyq");
	img.src  = "images/keyq.png";
}

function changeWAgain(){
	var img = document.getElementById("keyw");
	img.src  = "images/keyw.png";
}

function changeEAgain(){
	var img = document.getElementById("keye");
	img.src  = "images/keye.png";
}

function changeRAgain(){
	var img = document.getElementById("keyr");
	img.src  = "images/keyr.png";
}

function changeTAgain(){
	var img = document.getElementById("keyt");
	img.src  = "images/keyt.png";
}

function changeYAgain(){
	var img = document.getElementById("keyy");
	img.src  = "images/keyy.png";
}
/***********************************************/
/*Recgnize when a QWERTY key is pressed. If so, change the image to pressed key*/
document.onkeydown = function(e) {
	e = e || window.event;
	if (e.keyCode == '81') 
		changeQ();
	if (e.keyCode == '87')
		changeW();
	if (e.keyCode == '69')
		changeE();
	if (e.keyCode == '82')
		changeR();
	if (e.keyCode == '84')
		changeT();
	if (e.keyCode == '89')
		changeY();
}

/*Recognize when a QWERTY is no longer being held down. If so, change the image to unpressed key*/
document.onkeyup = function(e) {
	e = e || window.event;
	if (e.keyCode == '81') 
		changeQAgain();
	if (e.keyCode == '87')
		changeWAgain();
	if (e.keyCode == '69')
		changeEAgain();
	if (e.keyCode == '82')
		changeRAgain();
	if (e.keyCode == '84')
		changeTAgain();
	if (e.keyCode == '89')
		changeYAgain();
}