
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let actSum = 0;
    const gussianNoSum = (nums.length * (nums.length + 1)) / 2
    for (let i = 0; i < nums.length; i++) {
        actSum += nums[i]
    }
        return gussianNoSum - actSum

};