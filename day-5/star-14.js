// Write code to make this star pattern
// 1        
// 1 2       
// 1 2 3      
// 1 2 3 4     
// 1 2 3 4 5    
// 1 2 3 4 5 6   
// 1 2 3 4 5 6 7  
// 1 2 3 4 5 6 7 8 

let len = 8;
let str = '';
for (let i = 1; i <= len; i++) {
  let num = 0;
  for (let j = 1; j <= len; j++) {
    num++;
    if (j <= i)
      str += num + " ";
    else
      str += ' ';
  }
  str += '\n';
}
console.log(str);
