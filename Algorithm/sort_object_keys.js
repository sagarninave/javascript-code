const obj = { a: 1, c: 2, b: 3, e: 5, d: 4 };
const result2 = {};
for(let i of Object.keys(obj).sort()){
  result2[i] = obj[i];
}
console.log("Result : ", result2)