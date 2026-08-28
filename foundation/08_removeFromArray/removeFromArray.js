const removeFromArray = function(array, ...args) {

    return array.filter(elements => !args.includes(elements));

};

console.log(removeFromArray([1,2,3,4,3,4,5,6,7,8,8], 4, 8));

// Do not edit below this line
module.exports = removeFromArray;
