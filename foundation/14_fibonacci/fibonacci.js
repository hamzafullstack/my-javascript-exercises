const fibonacci = function(n) {
  const num = Number(n); // convert str inputs to numbers
  if(num < 0 || isNaN(num)) {
    return 'OOPS'; // returns oops for negative nums or invalid inputs.
  }
  if (num === 0) {
    return 0;
  }
  let a = 1; // 1st member.
  let b = 1; // 2nd member.

  for(let index = 3; index <= num; index++) {
    // loop starts from 3 because we know the 1st & 2nd member.
    const next = a + b;
    a = b;
    b = next;
  }
  return b;

};

console.log(fibonacci(8));

// Do not edit below this line
module.exports = fibonacci;
