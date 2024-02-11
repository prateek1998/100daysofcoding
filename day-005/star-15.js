// Write code to make this number pattern
// 1 2 3 4 5 6 7 8         
// 1 2 3 4 5 6 7  
// 1 2 3 4 5 6      
// 1 2 3 4 5 
// 1 2 3 4   
// 1 2 3
// 1 2
// 1 

let len = 8;
let str = '';
for (let i = 1; i <= len; i++) {
  let num = 0;
  for (let j = 1; j <= len - i + 1; j++) {
    num++;
    str += num + " ";
  }
  str += '\n';
}
console.log(str);
