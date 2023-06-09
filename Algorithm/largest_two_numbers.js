let arr = [12, 99, 35, 1, 10, 34, 1]
let first = 0, second = 0;

for (let i of arr) {
  if (i > first) {
    first = i;
  }
  if (i > second && i != first) {
    second = i;
  }
}
console.log(first);
console.log(second);