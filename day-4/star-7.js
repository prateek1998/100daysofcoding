// Write code to make this star pattern
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *

let len = 5;
let str = '';
let k = 0;
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len + i; j++) {
    if (
      len - i + 1 <= j &&
      j <= len + i - 1 &&
      k
    ) {
      str += '*';
      k = 0;
    } else {
      k = 1;
      str += ' ';
    }
  }
  str += '\n';
}
console.log(str);
