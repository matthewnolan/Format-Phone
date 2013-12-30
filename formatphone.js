/*
formatPhone.js
The MIT License (MIT)
Copyright (c) 2013 Matthew Nolan
www.redbutton.io
*/

formatPhone = function(theInput) {
	// formats a number to (123) 456-7890

	var obj = document.getElementById(theInput);
	function formatNumbers (){
	    var numbers = obj.value.replace(/\D/g, ''), char = {0:'(',3:') ',6:' - '};
	    obj.value = '';
	    for (var i = 0; i < numbers.length; i++) {
	        obj.value += (char[i]||'') + numbers[i];
	    }
	}

	if (obj.addEventListener) {
		obj.addEventListener("keypress", formatNumbers);
	} else if (obj.attachEvent) { // for old browsers
		obj.attachEvent("onkeypress", formatNumbers);
	}
	formatNumbers(); //format any default value 	
}
