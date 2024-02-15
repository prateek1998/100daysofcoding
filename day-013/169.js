/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length;
    let times = Math.ceil(len / 2);
    let hashTable = {};

    if(len == 1)
        return nums;

    for (let i = 0; i < len; i++) {
        if (hashTable[nums[i]]){
            hashTable[nums[i]] += 1;
            if(hashTable[nums[i]] >= times)
                return nums[i];
        }
        else hashTable[nums[i]] = 1;
    }
};

