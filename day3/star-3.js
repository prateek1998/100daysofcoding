// Write code to make this star pattern 
// ******
//  *****
//   ****
//    ***
//     **
//      *
let len = 7;
for (let i = 0; i < len; i++) {
  let line = '';
  for (let j = 0; j < len; j++) {
    if ((i <= j) && (j <= len))
      line += '*';
    else
      line += " "
  }
  console.log(line);
}

