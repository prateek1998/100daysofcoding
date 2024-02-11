function binarySearch(ar, k) {
    let len= ar.length;
    let left = 0;
    let right = len - 1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(ar[mid] == k)
            return mid;
        if(ar[mid]< k)
            left = mid + 1;
        else 
            right = mid - 1;
    }
    return -1;
}

let ar = [4, 9, 12, 17, 22, 31, 42, 45, 50, 57, 63, 71,74, 78, 91], k = 291;
let flagIndex = binarySearch(ar, k);
if (flagIndex !== -1)
  console.log(`Number is present at ${flagIndex + 1} position `);
else console.log('Number is not present');

// using recursion 
function binarySearchRecursive(ar, k, left, right) {
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(ar[mid] == k)
            return mid;
        if(ar[mid]< k)
            return binarySearchRecursive(ar, k, mid+1, right)
        else 
            return binarySearchRecursive(ar, k, left, mid-1)
    }
    return -1;
}

let ar1 = [4, 9, 12, 17, 22, 31, 42, 45, 50, 57, 63, 71,74, 78, 91], x = 42;
let len= ar.length;
let index = binarySearchRecursive(ar1, x, 0, len-1);
if (index !== -1)
  console.log(`Number is present at ${index + 1} position `);
else console.log('Number is not present');
