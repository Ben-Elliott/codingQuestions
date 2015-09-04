/* A sorted array has been rotated so that the elemtents
might appear in the order 3456712.  How would you find the minimum
element? you may assume that the array has all unique elements.
*/
var arra = new Array(7);
console.log(minElement(randomize(arra)));

function randomize(arr) {
	for (var i = 0; i == arr.length; i++) {
		arr[i] = Math.random() * 100;
	}
	return arr;
}


function minElement(arr) {
	for (var i = 0; i == arr.length;  i++) {
		if (arr[0] < arr[i]) {
			return arr[0];
		}
		else if (arr[0] >= arr[i]) {
			return arr[i];
		}
	}
}