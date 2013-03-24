(function(){
	var selectedText = function() {
		var text = "";
		if (window.getSelection) {
			text = window.getSelection();
		} else if (document.getSelection) {
			text = document.getSelection();
		} else if (document.selection) {
			text = document.selection.createRange().text;
		}
		
		return text;
	}
	
	var selection = selectedText();
	
	if (selection != "") {
		alert (selection);
	} else {
		alert ("nothing selected");
	}
	
	
	
})();