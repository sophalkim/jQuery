
// Shows alert when click
var buttonOn = $("#buttonOn");
buttonON.on("click", function() {
	alert("Using the .on() function");
});

// Toggle button color when click
var buttonColor = $("#buttonColor");
buttonColor.click(function() {
	if (buttonColor.hasClass("btn-info")) {
		buttonColor.removeClass("btn-info");
		buttonColor.addClass("btn-warning");
	} else {
		buttonColor.removeClass("btn-warning");
		buttonColor.addClass("btn-info");
	}
});