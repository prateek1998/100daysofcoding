// Write code to make this number pattern
//     1
//    232
//   34543
//  4567654
// 567898765

let len = 5;
let str = '';
let num = 0;
for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= 2 * len - 1; j++) {
    if ((j >= len - i + 1) && (j <= len + i - 1)) {
      (j <= len) ? num++ : num--
      str += num;
    }
    else
      str += ' ';

  }
  str += '\n';
}
console.log(str);
