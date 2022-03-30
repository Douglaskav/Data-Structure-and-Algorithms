const fs = require("fs");

try {
	const data = fs.readFileSync("bigArray.txt", "utf8");
	insertSort(data);
} catch (e) {
	console.log(e);
}

function insertSort(array) {
	for (let j = 0; j < array.length; j++) {
		let key = array[j];
		let i = j - 1;

		while (i > -1 && array[i] > key) {
			array[i + 1] = array[i];
			i = i - 1;
		}

		array[i + 1] = key;
	}
	console.log(array);
}

insertSort([5, 2, 4, 6, 1, 3]);
