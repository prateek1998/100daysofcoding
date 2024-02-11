let ar = [84, 19, 73, 57, 91, 2, 65, 43, 12, 36, 68, 29, 50, 8, 97];
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < ar.length; i++) {
  min= Math.min(min, ar[i]);
  max= Math.max(max, ar[i])  
}
console.log(min, max)
let sort = ar.toSorted((a, b)=> a-b)
console.log(sort[1], sort[ar.length-2]);
