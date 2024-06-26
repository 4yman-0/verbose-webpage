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
navigator.geolocation.getCurrentPosition((pos) => {
    print(`Geolocaion (${pos.coords.latitude}, ${pos.coords.longitude}`);
}, (err)=>{
    if (err.PERMISSION_DENIED) {
        print("Geolocation is denied");
    } else {
        print(`Geolocation error`);
    }
});
Notification.requestPermission().then(result => {
    print(`Notifications are ${result}`)
});
print(`Screen: ${screen.width}x${screen.height} ${screen.orientation.type} ${screen.pixelDepth} bit`);

screen.orientation.addEventListener("change", () => {
    print(`Screen: ${screen.orientation.type}`);
});
