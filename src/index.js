console.log("Local JS is running!");

// Only run the jQuery when the document is fully loaded
$(document).ready(function () {

	// Find the "contact us!" button
	$(".toggleButton").click(function () {
		// Find the contact form and toggle it as well
		$("form").toggle();
	});
});
