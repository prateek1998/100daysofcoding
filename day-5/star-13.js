// Write code to make this star pattern
//      *
//     * *
//    *   *
//   *     *
//  *       *
// * * * * * *
let len = 6;
let str = '';
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len+i-1; j++) {
    if ((j == len-i+1) || (j == len + i - 1 ) ||i == len  ){
      str += '*';
    }
    else {
      str += ' ';
    }
  }
  str += '\n';
}
console.log(str);