// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

// Example 1:
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

// Example 2:
// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

// Example 3:
// Input: [3, 4, 1, 1, 6], S=8
// Output: 3

let ar = [2, 1, 5, 2, 3, 2], k=7;
// let ar = [3, 4, 1, 1, 6],
//   k = 8;

function smallArr(ar, k) {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;
  let len = ar.length;
  for (let windowEnd = 0; windowEnd < len; windowEnd++) {
    windowSum += ar[windowEnd];

    while (windowSum >= k) {
      if (minLength >= windowEnd - windowStart + 1)
        minLength = windowEnd - windowStart + 1;
      windowSum -= ar[windowStart];
      windowStart++;
    }
  }
  minLength === Infinity ? console.log(0) : console.log(minLength);
}

smallArr(ar, k);
