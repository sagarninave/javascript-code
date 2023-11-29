// let arr = [80, 59, 98, 23, 10, 23];
// const sorted = arr.sort();
// console.log(sorted[sorted.length - 2]);

// const arr1 = [1, 2, 3, 5];
// const addNum = 5;
// const firstPart = arr1.slice(0, 3);
// const secondPart = arr1.slice(3);
// console.log([...firstPart, 4, ...secondPart]);

// const array = [3, 4, 6, 4, 8, 3, 22, 56];
// const sorted = array.sort((a, b) => a - b);
// let firstLargest = sorted[sorted.length - 1];
// let secondLargest = 0;
// for (let i of array) {
//   if (firstLargest != i && i > secondLargest) {
//     secondLargest = i;
//   }
// }

// console.log("add:", firstLargest + secondLargest);

// console.log(mapData);

// const userNames = {
//   id: 1,
//   name: "Parent",
//   children: [
//     {
//       id: 2,
//       name: "Child 1",
//       children: [
//         {
//           id: 5,
//           name: "Grandchild 1.1",
//           children: [
//             {
//               id: 10,
//               name: "Grandchild 1.1",
//               children: [],
//             },
//           ],
//         },
//         {
//           id: 6,
//           name: "Grandchild 1.2",
//           children: [
//             {
//               id: 8,
//               name: "Grandchild 1.67",
//               children: [],
//             },
//             {
//               id: 9,
//               name: "Grandchild 1.985",
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Child 2",
//       children: [],
//     },
//     {
//       id: 4,
//       name: "Child 3",
//       children: [
//         {
//           id: 7,
//           name: "Grandchild 3.1",
//           children: [],
//         },
//       ],
//     },
//   ],
// };

// const keys = Object.keys(userNames);
// let names = [];
// const getNames = (data) =>
// for (let i of userNames["children"]) {
//   names.push(i.name);
//   if (i.children.length) {
//     console.log("user:", i);
//   }
// }

// console.log("names : ", names)
console.time()
const fullName = "sagar";
let result = "";
for (let i = fullName.length - 1; i >= 0; i--) {
  result += fullName[i]
}

console.log(result)
console.timeEnd()

console.time()
console.log(fullName.split('').reverse().join(''))
console.timeEnd()

// const arr = [1, 2, 3, 4, 5, null, undefined];

// const result = arr.reduce((acc, curr) => {
//   if (typeof curr === "number") {
//     acc += curr;
//   }
//   return acc;
// }, 0);
// console.log("🚀 ~ file: test1.js:111 ~ result ~ result:", result);
