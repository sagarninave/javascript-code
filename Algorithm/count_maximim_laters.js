const dataSet = "Sagar Ninave Ninave";

let result = {};
let max = 0;
let maxKey = "";

for (let i in dataSet) {
  if (dataSet[i] !== " ") {
    if (result[dataSet[i].toLowerCase()]) {
      result[dataSet[i]] = result[dataSet[i]] += 1;
      if (result[dataSet[i]] > max) {
        max = result[dataSet[i]];
        maxKey = dataSet[i];
      }
    } else {
      result[dataSet[i]] = 1;
    }
  }
}
console.log("Result : ", result);
console.log("Maximum Count of Number : ", { [maxKey]: max });

let value = 0;
let key = "";
const result1 = dataSet.split("").reduce((acc, curr) => {
  if (curr !== " ") {
    if (acc[curr]) {
      acc[curr] = acc[curr] += 1;
      if (acc[curr] > value) {
        value = acc[curr];
        key = curr;
      }
    } else {
      acc[curr] = 1;
    }
  }

  return acc;
}, {});

console.log("\nResult : ", result1);
console.log("Maximum Count of Number : ", { [key]: value });
