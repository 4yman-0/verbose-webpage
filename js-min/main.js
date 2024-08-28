// This file is generated AUTOMATICALLY

if(navigator.doNotTrack == 1) {
    print('Do Not Track', 'enabled');
}
if (history.length > 1){
    print('History', history.length + ' entries');
}
print('Language', 'Main: ' + navigator.language);
print('Language', 'Other: ' + navigator.languages.join(', ') + '.');
print('Platform', navigator.platform || 'unknown');
if (document.referrer){
	print('Referrer', document.referrer);
}
const scrW = screen.width;
const scrH = screen.height;

print('Screen', scrW + 'x' + scrH + ' ' +screen.orientation.type);

if (screen.orientation){
	screen.orientation.addEventListener('change', function (){
		print('Screen', screen.orientation.type);
	});
}
let isFirefox = 0, isWebkit = 0;
let isIE = !!window.document.documentMode || /*@cc_on!@*/false;
let isSafari = !!window.safari || /Constructor/.test(window.HTMLElement);

function assertFirefox (assert){
	assert && isFirefox++;
}

function assertWebkit (assert){
	assert && isWebkit++;
}
if (CSS && CSS.supports){
	assertFirefox(CSS.supports("-moz-user-focus", "normal"));
	assertFirefox(CSS.supports("-moz-box-sizing", "content-box"));
	assertWebkit(CSS.supports("-webkit-border-vertical-spacing", 0));
}
assertFirefox(Math.hypot(-24.42, -50.519999999999925) === 56.11244781686139);
assertWebkit(Math.hypot(-24.42, -50.519999999999925) === 56.1124478168614);
/*
	Note to self: Do NOT read userAgent
*/

assertFirefox(navigator.oscpu);

assertFirefox(navigator.productSub == '20100101');
assertWebkit(navigator.productSub != '20100101');

assertFirefox(!navigator.vendor);
assertWebkit(navigator.vendor == "Google Inc.");
assertFirefox(window.mozInnerScreenX !== undefined);
assertWebkit(window.webkitCancelAnimationFrame !== undefined);
assertWebkit(window.PERSISTENT !== undefined);
assertWebkit(window.chrome !== undefined);
if (isIE) {
	print('Browser', 'IE detected');
} else if (isFirefox > isWebkit) {
	print('Browser', 'Firefox detected');
} else if (isWebkit > isFirefox) {
	if (isSafari) {
		print('Browser', 'Safari detected');
	} else {
		print('Browser', 'Chromium detected');
	}
} else {
	print('Browser', 'Unknown');
}
if (typeof(window.ActiveXObject) != 'undefined') {
    print('ActiveX', 'enabled');
}
if (navigator.javaEnabled && navigator.javaEnabled()){
    print('Java', 'enabled');
}
if (navigator.getBattery){
    navigator.getBattery().then(function (battery){
        print(
			'Battery',
			battery.level*100 + '% ' + (battery.charging ? '' : 'not') + 'charging'
		);
    });
}
if (navigator.permisions){
    navigator.permissions.query({name: 'bluetooth'}).then(function (result){
        print('Bluetooth', result);
    });
}
if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function (pos){
        print('Geolocaion', '('+ pos.coords.latitude +', '+ pos.coords.longitude +')');
    }, function (err){
	    if (!err.PERMISSION_DENIED) {
            print('Geolocation', 'error');
        }
    });
}
if (Notification && Notification.requestPermission){
	Notification.requestPermission().then(function (result){
		(result == 'granted') && print('Notifications', result);
	});
}
