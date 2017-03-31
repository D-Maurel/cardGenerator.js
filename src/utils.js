function randomInt(max, min = 0) {
	return Math.floor(Math.random()*(max - min) + min);
}

function randomDouble(max = 1, min = 0){
	return Math.random()*(max - min) + min;
}