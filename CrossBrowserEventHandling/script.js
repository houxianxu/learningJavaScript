(function () {

	var buttons = document.getElementsByTagName('a');
	console.log("houxianxu");
	var buttonClick = function (event) {
		var target = eventUtility.getTarget(event),
			color = target.innerHTML.toLowerCase();

		eventUtility.preventDefault(event);

		document.body.style.backgroundColor = color;
	};

	for (var i = 0, len = buttons.length; i < len; i += 1) {
		eventUtility.addEvent(buttons[i], "click", buttonClick);
	}
	

}());