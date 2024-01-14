var count = 0;
function incrementCounter() {
	count += 1;
	document.getElementById("counter").innerHTML = count.toString();
}

function doAlert() {
	alert("hello");
}

//var countButton = document.getElementById("counterButton");
//counterButton.addEventListener("click", incrementCounter);


//var testButton = document.getElementById("alertButton");
//alertButton.addEventListener("click", doAlert);