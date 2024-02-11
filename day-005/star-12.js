// Write code to make this hollow pattern
// * * * * * * 
//  * * * * * 
//   * * * * 
//    * * * 
//     * * 
//      * 

let len = 6;
let str = '';
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len; j++) {
    if ((j >= i) && (j <= len + i - 1 ))
      str += '* ';
    else str += ' ';
  }
  str += '\n';
}
console.log(str);
