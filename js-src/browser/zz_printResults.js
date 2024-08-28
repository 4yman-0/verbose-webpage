if (isIE) {
	print("Browser", "IE detected");
} else if (isFirefox > isWebkit) {
	print("Browser", "Firefox detected");
} else if (isWebkit > isFirefox) {
	if (isSafari) {
		print("Browser", "Safari detected");
	} else {
		print("Browser", "Chromium detected");
	}
} else {
	print("Browser", "Unknown");
}
