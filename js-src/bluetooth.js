navigator.permissions.query({name: "bluetooth"}).then((result)=>{
    print("Bluetooth", result);
}, ()=>{
    print("Bluetooth", "unavailable");
});
