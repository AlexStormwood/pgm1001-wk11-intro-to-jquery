console.log("Local JS is running!");

// Only run the jQuery when the document is fully loaded
$(document).ready(function () {

	// Find the "contact us!" button
	$(".toggleButton").click(function () {
		// Find the contact form and toggle it as well
		$("form").toggle();
	});
});

// // Find the contact us button
// let contactUsButton = document.getElementsByClassName("toggleButton")[0];
// // Add event listener to the contact us button 
// contactUsButton.addEventListener("click", () => {
// 	// Find the form 
// 	let formToToggle = document.querySelector("form");

// 	// Toggle the form 
// 	if (formToToggle.style.display != "none") {
// 		formToToggle.style.display = "none";
// 	} else {
// 		formToToggle.style.display = "block";
// 	}
// });

