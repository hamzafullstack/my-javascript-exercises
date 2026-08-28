const reverseString = function(string) {
   let reverse = '';

   for(let index = string.length -1; index >= 0; index--){

    reverse = reverse + string[index];
   }

   return reverse;

};

console.log(reverseString('Karachi'));
console.log(reverseString('Lahore'));
console.log(reverseString('Hydrabad'));
console.log(reverseString('Sakshi'));

// Do not edit below this line
module.exports = reverseString;
