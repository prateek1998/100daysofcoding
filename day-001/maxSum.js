// find the maximum sum of any contiguous subarray of size ‘k’.
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
function maxSum(arr, k) {
  let len = arr.length;
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = 0;
  let maxInd = [];
  for (let windowEnd = 0; windowEnd < len; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (maxSum < windowSum) {
        maxSum = windowSum;
        maxInd=[];
        // if you want to find out the index then uncomment this lines
        // for (let i = 0; i < k; i++) {
        //   maxInd.push(windowStart + i); 
        // }
      }
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  console.log(maxSum, maxInd);
}

maxSum(arr, k);
