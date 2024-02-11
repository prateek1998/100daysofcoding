/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let outArr = [];
    let len = nums.length;
    let sortArr = nums.sort((a,b) => a-b)
    for(let i =0; i< len; i++){
        if(sortArr[i]=== target)
          outArr.push(i)
    }
    return outArr;
  };