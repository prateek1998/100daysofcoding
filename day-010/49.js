/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = {};
    if (strs.length === 1)
        return [strs]
    for (let i = 0; i < strs.length; i++) {
        let tmp = strs[i].split('').sort().join('');
        if (hash[tmp]) hash[tmp].push(strs[i]);
        else
            hash[tmp] = [strs[i]];
    }
    return Object.values(hash)
};