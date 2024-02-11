/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let tmpArr = s.replace(/ +/g,' ').trim().split(' ');
    let finalArr = []
    for(let i=0; i< tmpArr.length; i++){
        finalArr.push(tmpArr[tmpArr.length -i-1])
    }
    return finalArr.join(' ') 
};
