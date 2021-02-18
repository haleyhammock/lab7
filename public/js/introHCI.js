'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	//$('.likeCtr').click(addProjectDetails);
	$('.likebtn').click(addProjectDetails);
}

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	ga("send", "event", 'like', 'click');
}