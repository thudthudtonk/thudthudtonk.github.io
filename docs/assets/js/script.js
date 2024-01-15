var count = 0;
function incrementCounter() {
	count += 1;
	document.getElementById("counter").innerHTML = count.toString();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function redBlueFlip() {
	var test1 = getRandomInt(2);
	if (test1 == 0) {
		document.getElementById("colorParagraph").innerHTML = "red";
		return;
	} else {
		document.getElementById("colorParagraph").innerHTML = "blue";
		return;
	}
}

function redBlueCheck(color) {
	if (color == document.getElementById("colorParagraph").innerHTML) {
		document.getElementById("rightWrong").innerHTML = "correct";
		incrementCounter();
		redBlueFlip();
		return;
	} else {
		document.getElementById("rightWrong").innerHTML = "incorrect";
		return;
	}
}

function doAlert() {
	alert("hello");
}

//var countButton = document.getElementById("counterButton");
//counterButton.addEventListener("click", incrementCounter);


//var testButton = document.getElementById("alertButton");
//alertButton.addEventListener("click", doAlert);