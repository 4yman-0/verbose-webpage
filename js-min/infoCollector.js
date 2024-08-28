var infoCollectorsArrs = [];

function infoCollect(callback) {
	infoCollectorsArrs.push(callback);
}

function collectStart() {
	infoCollectorsArrs.forEach(callback => callback());
	delete infoCollectorsArrs;
}
