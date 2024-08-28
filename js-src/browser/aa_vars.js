let isFirefox = 0, isWebkit = 0;
let isIE = !!window.document.documentMode || /*@cc_on!@*/false;
let isSafari = !!window.safari || /Constructor/.test(window.HTMLElement);

function assertFirefox (assert){
	if (assert) isFirefox++;
}

function assertWebkit (assert){
	if (assert) isWebkit++;
}
