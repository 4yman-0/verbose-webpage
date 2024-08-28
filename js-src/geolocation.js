if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos) => {
        print('Geolocaion', '('+ pos.coords.latitude +', '+ pos.coords.longitude +')');
    }, (err)=>{
	    if (!err.PERMISSION_DENIED) {
            print('Geolocation', 'error');
        }
    });
}
