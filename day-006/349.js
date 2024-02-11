/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let tmp = [];
    let len1 = nums1.length;
    let len2 = nums2.length
    let smallArr = len1 > len2 ? nums2 : nums1;
    let bigArr = len1 > len2 ? nums1 : nums2;
    for (let i = 0; i < smallArr.length; i++) {
        if (bigArr.indexOf(smallArr[i]) !== -1 && tmp.indexOf(smallArr[i]) === -1 ) 
        tmp.push(smallArr[i]);
    }
    return tmp
};