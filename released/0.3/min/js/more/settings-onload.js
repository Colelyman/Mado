/* All the things to do when settings.html is loaded, event listeners are here because Chrome doesn't want JS in the HTML. */

window.onload = function() {
	/*
    * Shortcuts.
    */
    head = document.getElementsByTagName("head")[0]; // The "head" section of the option window.
    windowClose = document.getElementById("window-close"); // Get the close button

	markdownSyntax = document.getElementById("markdown-radio");
	gfmSyntax = document.getElementById("gfm-radio");

	highlightingCheck = document.getElementById("highlighting-checkbox");

	smaDisplaySize = document.getElementById("small-display-radio");
	medDisplaySize = document.getElementById("medium-display-radio");
	bigDisplaySize = document.getElementById("big-display-radio");

	bigInputContainer = document.getElementById("big-display-input-container");
	bigLabelContainer = document.getElementById("big-display-label-container");
	viewOnResize = document.getElementById("global-view-checkbox");

	analytics = document.getElementById("analytics-checkbox");

	/* Functions. */
	// if (screen.width < 1366) { // Don't show "Big" if the screen is too small
	// 	bigInputContainer.style.display = "none";
	// 	$(bigInputContainer).css("display", "none");
	// 	$(bigLabelContainer).css("display", "none");
	// }

	/*
    * Functions.
    */
    determineCloseButton(); // Determine the close button style.

	
	getSyntax();
	// getHighlighting();
	// getDisplaySize();
	getAnalytics();

	$(markdownSyntax).on("click", setSyntax);
	$(gfmSyntax).on("click", setSyntax);

	// $(highlightingCheck).on("click", setHighlighting);

	/*
	$(smaDisplaySize).on("click", function() { setDisplaySize("small"); });
	$(medDisplaySize).on("click", function() { setDisplaySize("medium"); });
	$(bigDisplaySize).on("click", function() { setDisplaySize("big"); });
	*/
	
	$(analytics).on("click", setAnalytics);

	$(windowClose).on("click", function() {
        chrome.app.window.current().close();
    });
}
