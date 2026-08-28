const repeatString = function(string, num) {

    if (Math.sign(num) === -1){
            return "ERROR";
        }

    let result = '';

    for(let index = 0; index < num; index++){

        if(index < num){
            result = result.concat(string);
        }
    }

    return result;
};

console.log(repeatString('Karachi', 5));

// Do not edit below this line
module.exports = repeatString;
