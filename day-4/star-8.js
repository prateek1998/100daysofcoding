// Write code to make this star pattern
// *
// **
// ***
// **
// *

let len = 5;
let mid = Math.ceil(len / 2);
let str = '';
let k = 0;
for (let i = 1; i <= len; i++) {
  i <= mid ? k++ : k--;
  for (let j = 1; j <= mid; j++) {
    if (j <= k)
      str += '*';
    else str += ' ';
  }
  str += '\n';
}
console.log(str);