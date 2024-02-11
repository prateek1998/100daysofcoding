// Write code to make this star pattern
// *********
// **** ****
// ***   ***
// **     **
// *       *

let len = 7
let str = '';
let k = 0;
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= 2* len -1; j++) {
    if ( (j<=len-i+1) ||(j>=len+i-1) ){
      str += '*';
    } else {
      str += ' ';
    }
  }
  str += '\n';
}
console.log(str);
