function mergeSort(list) {
	if (list.length < 2) return list;

	var mid = Math.floor(list.length / 2);
	var left = mergeSort(list.slice(0, mid));
	var right = mergeSort(list.slice(mid));
	return merge(left, right);
}

function merge(sublist1, sublist2) {
	var resultList = [];
	while (sublist1.length > 0 && sublist2.length > 0)
		resultList.push(
			sublist1[0] < sublist2[0] ? sublist1.shift() : sublist2.shift()
		);
	return resultList.concat(sublist1.length ? sublist1 : sublist2);
}

console.log(mergeSort([5, 2, 4, 6, 1, 3]));
