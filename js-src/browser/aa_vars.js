let isFirefox = 0, isWebkit = 0;
let isIE = !!window.document.documentMode || /*@cc_on!@*/false;
let isSafari = !!window.safari || /Constructor/.test(window.HTMLElement);

function assertFirefox (assert){
	assert && isFirefox++;
}

function assertWebkit (assert){
	assert && isWebkit++;
}
