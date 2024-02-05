// Write code to make this star pattern
//  1
//  1 2
//  1   3
//  1     4 
//  1 2 3 4 5

let len = 8;
let str = '';
for (let i = 1; i <= len; i++) {
  let num = 0;
  for (let j = 1; j <= len; j++) {
      num++;
    if (j === 1 || j === i || i === len){
      str += num + " ";
    }
    else
      str += '  ';
  }
  str += '\n';
}
console.log(str);
