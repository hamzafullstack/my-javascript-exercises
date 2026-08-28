const convertToCelsius = function(f) {
 return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(c) {
  return(((c * 9 / 5) +32) * 10) / 10;
};

console.log(convertToCelsius(60));
console.log(convertToFahrenheit(35));
console.log(convertToFahrenheit(35.1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
