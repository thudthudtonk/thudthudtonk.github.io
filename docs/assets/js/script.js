var count = 0;
var streak = 0;
var longestStreak = 1;
function incrementCounter() {
	count += 1;
	document.getElementById("counter").innerHTML = count.toString();
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function redBlueFlip(color) {
	var test1 = getRandomInt(2);
	if (test1 == 0) {
		document.getElementById("colorParagraph").innerHTML = "red";
		if (color == "red") {
			streak += 1;
			if (streak > longestStreak) {
				longestStreak = streak;
			}
			document.getElementById("streak").innerHTML = longestStreak.toString();
		} else {
			streak = 0;
		}
		return;
	} else {
		document.getElementById("colorParagraph").innerHTML = "blue";
		if (color == "blue") {
			streak += 1;
			if (streak > longestStreak) {
				longestStreak = streak;
			}
			document.getElementById("streak").innerHTML = longestStreak.toString();
		} else {
			streak = 0;
		}
		return;
	}
}

function redBlueCheck(color) {
	if (color == document.getElementById("colorParagraph").innerHTML) {
		document.getElementById("rightWrong").innerHTML = "correct";
		incrementCounter();
		redBlueFlip(color);
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