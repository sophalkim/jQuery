
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

var allButton = $("#buttonColor2");
allButton.click(function() {
	if (allButton.hasClass("btn-primary")) {
		allButton.removeClass("btn-primary");
		allButton.addClass("btn-danger");
	} else {
		allButton.removeClass("btn-danger");
		allButton.addClass("btn-primary");
	}
});

var thumbnail = $("#waterfall");
thumbnail.animate({left: "+=200px"}, "slow");

var showButton = $("#showButton");
var showText = $("#showText");
showButton.click(fucntion() {
	showText.show("fast");
});

// Enable the form
$("#formDisable").prop("disabled", true);
var enableButton = $("#enableForm");
enableButton.click(function() {
	$("#formDisable").prop("disabled", false);
});

var linkItemReplaceButton = $("#linkItemReplaceButton");
linkItemReplaceButton.click(function() {
	var secondListItem = $("#li.list-group-item").eq("1");
	secondListItem.text("Hello World");
});

// Toggle CheckBox Visibility
var showCheckBoxButton = $("#showCheckBoxButton");
showCheckBoxButton.click(function() {
	var checkBox = $("#checkBox");
	if (checkBox.is(":hidden")) {
		checkBox.show();
	} else {
		checkBox.hide();
	}
});