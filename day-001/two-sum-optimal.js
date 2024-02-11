// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numHashTable = {};
    for( let i in nums){
        let comp = target - nums[i];
        if(numHashTable[comp]>-1){
            return [numHashTable[comp], i]
        }
        numHashTable[nums[i]] = i
    }
};