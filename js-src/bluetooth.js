if (navigator.permisions){
    navigator.permissions.query({name: 'bluetooth'}).then((result)=>{
        print('Bluetooth', result);
    });
}
