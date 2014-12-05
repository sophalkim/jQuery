var buttonON = $("#buttonOn");
buttonOn.on("click", function() {
	alert("Using the .on() function");
});

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
thumnail.animate({ left: "+=200px"}, "slow");

var showButton = $("#showButton");
var showText = $("#showText");
showButton.click(function() {
	showText.show("fast");
});

$("#formDisable").prop("disabled", true);
var enableButton = $("#enableForm");
enableButton.click(function() {
	$("#formDisable").prop("disabled", false);
});

var linkItemReplaceButton = $("#linkItemReplaceButton");
linkItemReplaceButton.click(function() {
	var secondListItem = $("li.list-group-item").eq("1");
	secondListItem.text("Hello World");
});

var showCheckBoxButton = $("#showCheckBoxButton");
showCheckBoxButton.click(function() {
	var checkBox = $("#checkBox");
	if (checkBox.is(":hidden")) {
		checkBox.show();
	} else {
		checkBox.hide();
	}
});

var panelButton = $("#panelButton");
panelButton.click(function() {
	var panelElement = document.getElementById("panelElement");
	var listGroupItem = $(panelElement).find(".list-group-item");
	listGroupItem.text("Potato");
});

var buttonInput = $("#buttonInput");
buttonInput.click(function() {
	var inputFirstNameValue = $("#inputFirstName").val();
	var textFirstLastName = $("#textFirstLastName");
	var inputLastName = $("#inputLastName");
	inputLastName.val("Neat");
	textFirstLastName.text("Your name is " + inputFirstNameValue + " " + inputLastName.val());
});

var glyphiconButton = $("#glyphiconButton");
glyphiconButton.click(function() {
	var glyphiconSpan = $("#glyphiconSpan");
	glyphiconSpan.attr("class", "glyphicon glyphicon-heart");
});