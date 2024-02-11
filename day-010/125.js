// https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for(let i = 0; i < str.length; i++) {
     if(str[i] !== str[str.length - i - 1]) {
         return false
     }
 }
     return true;
 
};