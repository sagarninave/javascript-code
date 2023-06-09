const getIndex = function (nums) {

  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += (nums[i - 1] || 0)
    sum -= nums[i];
    console.log("number", nums[i], "sum", sum, "currentSum", currentSum)
    if (sum === currentSum) return i;
  }
  return -1
}
console.log(getIndex([1, 7, 3, 6, 5, 6]))
console.log(getIndex([1, 2, 3]))
console.log(getIndex([1, -1, -2, 2, 0]))