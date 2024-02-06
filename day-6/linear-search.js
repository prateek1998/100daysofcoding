let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 10, 13], k = 10;

function linearSearch(ar, k) {
  let len = ar.length;
  let flag = 0, flagIndex = -1;
  for (let i = 0; i < len; i++)
    if (ar[i] === k) {
      flag = 1;
      flagIndex = i + 1
      break;
    }
  return { flag, flagIndex }

}

let { flag, flagIndex } = linearSearch(ar, k);
if (flag)
  console.log(`Number is present at ${flagIndex} position `)
else
  console.log("Number is not present")
