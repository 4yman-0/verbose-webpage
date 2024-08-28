const scrW = screen.width;
const scrH = screen.height;

print('Screen', scrW + 'x' + scrH + ' ' +screen.orientation.type);

if (screen.orientation){
	screen.orientation.addEventListener('change', function (){
		print('Screen', screen.orientation.type);
	});
}
