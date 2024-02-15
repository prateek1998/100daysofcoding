/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length)
        return false;
    let subCount = 0;        
    for(let i=0; i< t.length; i++){
        if(s[subCount] == t[i])
            subCount++;
    }
    return subCount === s.length;
};