// question link: https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    let low = 0;
    let high = len- 1;
    while(low<= high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid] == target)
            return mid;
        if(nums[mid] < target)
            low = mid + 1;
        else 
            high = mid -1;
    }
    return -1;
};