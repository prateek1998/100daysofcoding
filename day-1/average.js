//1. Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
let ar = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 5;
// [2.2, 2.8, 2.4, 3.6, 2.8]

//optimal solution 
let len= ar.length;
let windowSum = 0;
let avgArr = [];
let windowStart = 0;
for(let windowEnd = 0; windowEnd< len; windowEnd++){
  windowSum+= ar[windowEnd];
  if(windowEnd>=k-1){
    avgArr.push(windowSum/k);
    windowSum -= ar[windowStart];
    windowStart++;
  }
}
console.log(avgArr);

// function arrCont(ar, k) {
//   let tmp = [];
//   let len = ar.length;
//   for (let i = 0; i < len - k + 1; i++) {
//     let sum = 0,
//       avg = 0;
//     for (let j = i; j < k + i; j++) sum += ar[j];
//     avg = sum / k;
//     tmp.push(avg);
//   }
//   console.log(tmp);
// }
// arrCont(ar, k);

// sliderArr(ar, k);
