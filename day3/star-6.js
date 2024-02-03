// Write code to make this star pattern 
//      *
//     ***
//    *****
//  *********
// *********** 
 
 
let layer = 9;
for (let i = 0; i < layer; i++) {
  let line = '';
  for (let j = 0; j < 2*layer; j++) {
    if ((layer-i-1 <= j) && (j <= layer+i-1))
    line += '*';
    else
      line += " "
  }
  console.log(line);
}

