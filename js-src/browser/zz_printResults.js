if (isIE) {
	print("Browser: IE detected");
} else if (isFirefox > isWebkit) {
	print("Browser: Firefox detected");
} else if (isWebkit > isFirefox) {
	print("Browser: Chromium/Safari detected");
} else {
	print("Browser: Unknown");
}
