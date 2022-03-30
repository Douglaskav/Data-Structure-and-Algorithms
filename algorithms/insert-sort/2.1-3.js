function resolution(array, v) {
	if (array.includes(v)) return array.indexOf(v);
	else return null;
}

console.log(resolution([92, 12, 3, 5, 65, 4, 23], 23));
