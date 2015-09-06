/* Design an algorithm to print all permutations of a string.
  For simplicity, assume all characters are unique.
*/

var str = String;
console.log(str);

function permString(str) {
  //A string is stored as an array, hoping to split and make all permutations of given letters
  
  var arr = str.split();
  
  // If I have three slots and three letters, I can make 6 different combinations of letters
  
  //need to create a recursive function with the base case being the last two elements of the slots
  for (var i = str.length - 1; i > 0; i--) {
         if (str.length - 1) {
           //if the entire string, print string
           console.log(str);
         }
         else {
           //each element above array element i-- in place of array element i-- and print it
           var tempStr = str.substring(i, str.length -1)
           //next loop through elements above given index and have them replace the index, then print out the string
           for (var t = 0; t < tempStr.length; t++) {
             arr[i] = arr[t];
             arr[t] = arr[i];
             console.log(arr);
           }
         }
   }
}