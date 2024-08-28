if (Notification && Notification.requestPermission){
	Notification.requestPermission().then(result => {
		(result == 'granted') && print('Notifications', result);
	});
}
