/* A ransom note can be formed by cutting words out of a magazine
to form a new sentence.  How would you figure out if a ransom  note
(represented as a string) can be formed from a given magazine (string)?
*/

//str0 is going to be a random ransom
//str1 is going to be a random magazine
var str0 = String;
var str1 = String;
randomString(str0, str1);
console.log(percentLikely(str0, str1));


function randomString(str0, str1) {
	//need to create a random string for str0 and a random magazine from str1
	//actually going to assume that the strings are given.  If the strings are randomized then "very likely" will not be returned ever in function percentLikely
	return str0;
	return str1;	
}
function percentLikely(str0, str1) {
	str0.split(" ");
	str1.split(" ");
	
	var wordsAlike = 0;
	
	for (var i = 0; i < str0.length; i++) {
		for (var t = 0; t < str1.length; t++){
			if (str0[i] == str1[t]) {
				//then return that I have found the word in the magazine and increase wordsAlike
				wordsAlike++
			}
		}
	}
	if (wordsAlike == str0.length) {
		return "Very likely";
	}
	
}