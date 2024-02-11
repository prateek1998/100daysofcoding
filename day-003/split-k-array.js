// Divide the array into K subarray of size ‘k’.

// Input: [1, 3, 2, 3, 2, 6, -1, 4, 1,12, 8, 2, 14], k=3
// Output: [[1, 3, 2], [3, 2, 6], [-1, 4, 1], [12, 8, 2], [14]];

let ar = [1, 3, 2, 3, 2, 6, -1, 4, 1, 12, 8, 2, 14], k = 5;

function splitArr(ar, k) {
    let len = ar.length;
    let finalArr = [];
    let tmpAr = [];
    for (let windowEnd = 0; windowEnd < len; windowEnd++) {
        tmpAr.push(ar[windowEnd]);
        if (windowEnd % k == k - 1 || windowEnd == len - 1) {
            finalArr.push(tmpAr);
            tmpAr = [];
        }
    }
    console.log(finalArr);
}

splitArr(ar, k);
