var URL = "";

function hot() {
	$.post(URL,true,success: function (msg){over(msg);});
}

function not() {
	$.post(URL,false),success: function (msg){over(msg);};
}

function over(message) {
	if (message === "You Win!" || message === "You Lose!") {
	document.getElementById("postgame").innerHTML = message;
	document.getElementById("postgame").style.visibility = "visible";
	document.getElementById("hot").style.visibility = "hidden";
	document.getElementById("not").style.visibility = "hidden";
	document.getElementById("celeb").style.visibility = "hidden";
	} else {
		document.getElementById("celeb").src = message;	
	}
}

function start() {
	$.get(URL); 
	document.getElementById("hot").style.visibility = "visible";
	document.getElementById("not").style.visibility = "visible";
	document.getElementById("celeb").style.visibility = "visible";
	document.getElementById("start").style.visibility = "hidden";
}