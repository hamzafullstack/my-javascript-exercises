const sumAll = function(start, end) {
    let total = 0
    
    // if argue is given less than zero like -1, 3 etc 
    if(start < 0 || end < 0) return "ERROR"

    // if argue is array [1, 4] etc
    if(typeof start !== 'number' || typeof end !== 'number') return "ERROR"

    // if argue is not full number it has floats returns error for 2.4 2.5 etc
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";

    // incase large number passed in start point(123, 2). handle range..
    if(start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for(let index = start; index <= end; index++){
        total += index;
    } 
    
    return total;

};
console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
