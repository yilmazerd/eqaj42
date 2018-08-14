// Returning structures from the functions is more elegant than returning a single value

function returnWithST(radius) {
	x = radius * 2 * 3.14;
	y = radius * radius *3.14;
	z = {x,y}
	return z;
}

ms = returnWithST(2)
console.log(ms)