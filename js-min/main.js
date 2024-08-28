// This file is generated AUTOMATICALLY

if (navigator.getBattery){
    navigator.getBattery().then((battery) => {
        print(`Battery: ${battery.level*100}% ${battery.charging ? "charging" : "not charging"}`)
    });
} else {
    print("Battery unavailable");
}
navigator.permissions.query({name: "bluetooth"}).then((result)=>{
    print(`Bluetooth is ${result}`);
}, ()=>{
    print("Bluetooth unavailable");
});
if(navigator.doNotTrack == 1) {
    print("Do Not Track enabled");
}
navigator.geolocation.getCurrentPosition((pos) => {
    print(`Geolocaion: (${pos.coords.latitude}, ${pos.coords.longitude}`);
}, (err)=>{
	if (err.PERMISSION_DENIED) {
        print("Geolocation is denied");
    } else {
        print(`Geolocation error`);
    }
});
if (history.length > 1){
    print(`History: ${history.length} entries`);
}
print(`Main language: ${navigator.language}`);
print(`Other languages: ${navigator.languages.join(", ")}.`);
Notification.requestPermission().then(result => {
    print(`Notifications are ${result}`)
});
if (document.referrer){
	print(`Referrer: ${document.referrer}`);
} else {
	print("Referrer unavailable");
}
print(`Screen: ${screen.width}x${screen.height} ${screen.orientation.type} ${screen.pixelDepth} bit`);

screen.orientation.addEventListener("change", () => {
    print(`Screen: ${screen.orientation.type}`);
});
let isFirefox = 0, isWebkit = 0;
// https://stackoverflow.com/a/25329460
let isIE = !!window.document.documentMode || /*@cc_on!@*/false;
(CSS.supports("-moz-user-focus", "normal")) && isFirefox++;
(CSS.supports("-moz-box-sizing", "content-box")) && isFirefox++;
(CSS.supports("-webkit-border-vertical-spacing", 0)) && isWebkit++;
if (Math.hypot(-24.42, -50.519999999999925) === 56.11244781686139) {
    isFirefox++;
} else if (Math.hypot(-24.42, -50.519999999999925) === 56.1124478168614) {
    isWebkit++;
}
(window.mozInnerScreenX !== undefined) &&            isFirefox++;
(window.webkitCancelAnimationFrame !== undefined) && isWebkit++;
(window.PERSISTENT !== undefined) &&                 isWebkit++;
(window.chrome !== undefined) &&                     isWebkit++;
if (isIE) {
	print("Browser: IE detected");
} else if (isFirefox > isWebkit) {
	print("Browser: Firefox detected");
} else if (isWebkit > isFirefox) {
	print("Browser: Chromium/Safari detected");
} else {
	print("Browser: Unknown");
}
if (typeof(window.ActiveXObject) != "undefined") {
    print("ActiveX enabled");
}
if (navigator.javaEnabled && navigator.javaEnabled()){
    print("Java enabled");
}
