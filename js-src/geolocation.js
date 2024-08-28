navigator.geolocation.getCurrentPosition((pos) => {
    print(`Geolocaion: (${pos.coords.latitude}, ${pos.coords.longitude}`);
}, (err)=>{
	if (err.PERMISSION_DENIED) {
        print("Geolocation is denied");
    } else {
        print(`Geolocation error`);
    }
});
