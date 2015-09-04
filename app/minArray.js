/* A sorted array has been rotated so that the elemtents
might appear in the order 3456712.  How would you find the minimum
element? you may assume that the array has all unique elements.
*/
var arra = new Array(7);
console.log(minElement(randomize(arra)));

function randomize(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Math.random() * 100;
	}
	console.log(arr);
	return arr;
}


function minElement(arrb) {
	for (var i = 0; i < arrb.length;  i++) {
		if (arrb[0] < arrb[i]) {
			//no changes
		}
		else if (arrb[0] >= arrb[i]) {
			//change array element one to equal array element i
			arrb[0] = arrb[i];
		}
	}
	return arrb[0];
}