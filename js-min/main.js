// This file is generated AUTOMATICALLY

if (navigator.getBattery){
    navigator.getBattery().then((battery) => {
        print(`Battery: ${battery.level*100}% ${battery.charging ? "charging" : "not charging"}`)
    });
} else {
    print("Battery unavailable");
}
if (history.length > 1){
    log('History', history.length + ' entries');
}
if (window !== window.parent){
	log()
}
log('Language', 'Main: ' + navigator.language);
log('Language', 'Other: ' + navigator.languages.join(', ') + '.');
log('Platform', navigator.platform || 'unknown');
if (document.referrer){
	log('Referrer', document.referrer);
}
var scrW = screen.width;
var scrH = screen.height;

screen.orientation.addEventListener("change", () => {
    print(`Screen: ${screen.orientation.type}`);
});
