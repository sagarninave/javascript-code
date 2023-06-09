const zeroSumSolution1 = (numarr) => {

  for (let i = 0; i < numarr.length; i++) {
    for (let j = 0; j < numarr.length; j++) {
      if (numarr[i] + numarr[j] === 0) {
        return [numarr[i], numarr[j]]
      }
    }
  }
  return []
}

console.log(zeroSumSolution1([-7, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
console.log(zeroSumSolution1([-5, -4, -3, -2, -1, 11, 10, 6, 7, 8, 9]));


const zeroSumSolution2 = (numarr) => {

  let left = 0;
  let right = numarr.length - 1;

  while (left < right) {
    let sum = numarr[left] + numarr[right];
    if (sum === 0) {
      return [numarr[left], numarr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return []
}

console.log(zeroSumSolution2([-7, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
console.log(zeroSumSolution2([-5, -4, -3, -2, -1, 11, 10, 6, 7, 8, 9]));