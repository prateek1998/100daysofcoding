// Write code to make this star pattern 
// *
// **
// ***
// ****
// *****
// ******

let len = 8;
for (let i = 0; i < len; i++) {
  let line = '';
  for (let j = 0; j < i+1; j++) {
    line += '*';
  }
  console.log(line);
}

