const palindromes = function (palindrome) {

    const cleanText = palindrome.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleanText.split('').reverse().join('');
    const backToNormal = reversed.split('').reverse().join('');
    const isPalindrome = reversed === backToNormal;
    return isPalindrome

};
console.log(palindromes('AmeerHamza'));
console.log(palindromes('racecar'));
console.log(palindromes('r3ace3car'));
console.log(palindromes('Mom'));
console.log(palindromes('LeVeL'));
console.log(palindromes('civIc'));
console.log(palindromes('RadaR'));
console.log(palindromes('Thinkpad'));

// Do not edit below this line
module.exports = palindromes;
