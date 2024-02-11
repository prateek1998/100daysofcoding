let ar = [3, 4, 5, 3, 7, 2], target = 2;

function splitArr(ar, target) {
  let sum = 0;
  let minSum = Infinity;
  let maxSum = -Infinity;
  let len = ar.length;
  for (let i = 0; i < len; i++) {
    sum += ar[i];
    if (i % target === target - 1 || i === len - 1) {
      minSum = Math.min(minSum, sum);
      maxSum = Math.max(maxSum, sum);
      sum = 0;
    }
  }
  return Math.abs(maxSum - minSum)
}
console.log(splitArr(ar, target))
