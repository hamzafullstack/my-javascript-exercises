const add = function(a, b) {
	return a + b
};
console.log(add(2, 1));

const subtract = function(a, b) {
  return a - b;
};
console.log(subtract(2, 1));

const sum = function(array) {
	return array.reduce((total, item) =>  total + item, 0);
};
console.log(sum([1,3,4,5]));

const multiply = function(array) {
  return array.reduce((accumulator, val) => {
    return accumulator * val;
  });
};

console.log(multiply([2,3,4,5]));

const power = function(a, b) {
  return a ** b;
};
console.log(power(2, 3));

const factorial = function(num) {
  if(num < 0) {
    return undefined; // factorial dont exist for negative numbers - GOOGLE - Web Dev - Docs.
  }
  let result = 1;
  for(let index = 2; index <= num; index++) {
    result *= index;
  }
  return result;
};
console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
