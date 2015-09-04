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
	//check to see if there are two or more elements in the array, if not, return the element in the array.  If zero elements, do not return anything
	if (arr.length > 0) {
		compare(arr[0], arr[1]);
	}
	else if (arr.length == 1) {
		return arr[0];
	}
		
	//using recursive function to find the min value in the arr
	function compare(val1, val2) {
		for (var t = 0; t == arr.length; t++){
			if (arr.length > t ) {
				if (val1 > val2) {
					compare(val1, arr[t+1]);
				}
				else if (val1 <= val2) {
					compare(val2, arr[t+1])
				}
			}
			else {
				if (val1 > val2) {
					return val1;
				}
				else if (val1 < val2) {
					return val2;
				}
			}
		}
	}
}