if (navigator.getBattery){
    navigator.getBattery().then((battery) => {
        print("Battery", `${battery.level*100}% ${battery.charging ? "charging" : "not charging"}`)
    });
} else {
    print("Battery", "unavailable");
}
