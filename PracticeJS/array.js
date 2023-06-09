console.log("\n");

/* ARRAY  INITIALISATION  */

/* Empty Array */
const arr = [];
console.log("Array 0 : ", arr);

/* Array constructor */
const arr1 = new Array();
console.log("\nArray 1 : ", arr1);

/* Array constructor with default length */
const arr2 = new Array(5);
console.log("\nArray 2 : ", arr2);

/* Array constructor with default values */
const arr3 = new Array(5, 4, 3, 2, 1);
console.log("\nArray 3 : ", arr3);

/* Array default with normal method */
const arr4 = [5, 4, 3, 2, 1];
console.log("\nArray 4 : ", arr4);

/* Array fill default value using fill function and constructor */
const arr5 = new Array(5).fill(1);
console.log("\nArray 5 : ", arr5);

/* Array fill default value with from function and constructor */
const arr6 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("\nArray 6 : ", arr6);

/* Array functions */
let arr7 = ["sagar", "sanket", "vishal"];
console.log("\nArray 7 Keys : ", arr7.keys());
console.log("Array 7 Values : ", arr7.values());
console.log("Array 7 Entries : ", arr7.entries());
console.log("Array 7 From Keys :", Array.from(arr7.keys()));
console.log("Array 7 From Values :", Array.from(arr7.values()));
console.log("Array 7 From Entries :", Array.from(arr7.entries()));
console.log("Array 7 From Entries typeOf:", typeof Array.from(arr7.entries()));
console.log("Array 7 Map : ", new Map(arr7.entries()));
console.log("Array 7 Map Set: ", ...new Set(new Map(arr7.entries())));

/* Array convert into string using toString() function */
const arr8 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("\nArray 8 : ", arr8.toString());

/* Array convert into string with currency using toLocalString() function */
const arr9 = Array.from({ length: 5 }, (_, i) => i + 1);
const resultArr9 = arr9.toLocaleString("en-US", { style: "currency", currency: "USD" })
console.log("\nArray 9 : ", resultArr9);

/* Array manupulation functions */
const arr10 = Array.from({ length: 5 }, (_, i) => i + 1);
arr10.push(10);
console.log("\nArray 10 Push (Add item in the last position) : ", arr10);
arr10.pop();
console.log("Array 10 Pop (Remove item from the last position) : ", arr10);
arr10.unshift(0);
console.log("Array 10 Unshift (Add item in the first position) : ", arr10);
arr10.shift();
console.log("Array 10 Shift (Remove item from the first position) : ", arr10);
arr10.splice(2)
console.log("Array 10 Splice (Remove all item from second position index) : ", arr10);
arr10.push(3);
arr10.push(4);
arr10.push(5);
/* Splice function used for remove and add both data */
arr10.splice(2, 1);
console.log("Array 10 Remove item from particular index :", arr10)
arr10.splice(2, 0, 3, 3.1, 3.2, 3.3);
console.log("Array 10 Add item from particular index :", arr10)

/* Add item in the array on max index of length it will add item but gap will fill as blank index */
const arr11 = [1, 2, 3, 4, 5];
arr11[9] = 10;
console.log("\nArray 11 Add (item to array with empty index) :", arr11, `Length of array is ${arr11.length}`);
arr11[8] = 9;
console.log("Array 11 Add (item to array with empty index) :", arr11, `Length of array is ${arr11.length}`);

/* Array concatination */
const arr12_first = [1, 2, 3, 4, 5];
const arr12_second = [6, 7, 8, 9, 10];
console.log("\nArray 12 concatination 1 : ", arr12_first.concat(arr12_second));
/* Array concatination merge all element in single array event put array within array */
console.log("Array 12 concatination 2 : ", arr12_first.concat(arr12_second, [11, 12], 13));
console.log("Array 12 concatination 3 : ", [...arr12_first, ...arr12_second, 11, 12, 13]);

/* Array copy */
const arr13 = [{ first_name: "sagar", last_name: "ninave" }];
const arr13_copy1 = [...arr13];
const arr13_copy2 = JSON.parse(JSON.stringify(arr13));
arr13[0].first_name = "sanket";
/* Array item will not changed because spread operator take refernce from array */
console.log("\nArray 13 Spread operation shallow copy", arr13)
console.log("Array 13 Spread operation shallow copy", arr13_copy1)
console.log("Array 13 Spread operation deep copy", arr13_copy2)
console.log("\n");

/* Array iteration */
const arr14 = Array.from({ length: 10 }, (_, i) => i + 1);

/* for loop */
for (let index = 0; index < arr14.length; index += 1) {
  console.log(`Array 14 For Loop : ${arr14[index]}`);
}
console.log("\n");

/* for of */
for (let item of arr14) {
  console.log(`Array 14 For Of : ${item}`);
}
console.log("\n");

/* for in */
for (let index in arr14) {
  console.log(`Array 14 For In : ${arr14[index]}`);
}
console.log("\n");

/* forEach built in functions */
arr14.forEach(item => {
  console.log("Array 14 forEach : ", item)
});
console.log("\n");

/* Callback forEach built in functions */
const animals = ["lion", "tiger", "lion", "tiger", "lion", "leopard", "lion", "tiger", "lion", "leopard"];
function counter(animal) {
  if (animal === "lion") {
    this.lion += 1;
  } else if (animal === "tiger") {
    this.tiger += 1;
  } else if (animal === "leopard") {
    this.leopard += 1;
  }
};
const count = { lion: 0, tiger: 0, leopard: 0 };
animals.forEach(counter, count);
console.log("Callback forEach : ", count)
console.log("\n");

/* While loop */
let index = 0;
while (index < arr14.length) {
  console.log(`Array 14 While Loop : ${arr14[index]}`);
  index += 1;
}
console.log("\n");

/* Do While loop */
let indexDW = 0;
do {
  console.log(`Array 14 Do While Loop : ${arr14[indexDW]}`);
  indexDW += 1;
} while (indexDW < arr14.length);
console.log("\n");

/* While loop for iteration */
const iteration = arr14.entries();
let value = iteration.next();
while (!value.done) {
  console.log("Array 14 While Iterator : ", value.value)
  value = iteration.next();
}
console.log("\n");

/* For of loop for iteration */
for (let value of arr14.entries()) {
  console.log("Array 14 For Of Iterator : ", value)
}
console.log("\n");

/* indexOf function (index of item) */
console.log("Array 14 indexOf : ", arr14.indexOf(4));
console.log("\n");

/* lastIndexOf function (last index of array) */
console.log("Array 14 lastIndexOf : ", arr14.lastIndexOf());
console.log("\n");

/* Includes function (check item present in array and return true or false) */
console.log("Array 14 Includes 1 : ", arr14.includes(10));
console.log("Array 14 Includes 2 : ", arr14.includes(11));
console.log("\n");

const arr15 = [{ name: "sagar", age: 1 }, { name: "sanket", age: 22 }, { name: "sagar", age: 20 }, { name: "sagar", age: 1 }, { name: "sagar", age: null }];
/* Find function (if item is found return/first item return if multiple found item or return undefined) */
console.log("Array 15 Find 1 : ", arr15.find(item => item.age === 1));
console.log("Array 15 Find 2 : ", arr15.find(item => item.age === 21));
console.log("Array 15 Find 3 : ", arr15.find(item => item.age === 1));
console.log("\n");

/* find index return index of item found first */
console.log("Array 15 Find Index 1 : ", arr15.findIndex(item => item.age === 1));
console.log("Array 15 Find Index 2 : ", arr15.findIndex(item => item.age === 20));
console.log("Array 15 Find Index 3 : ", arr15.findIndex(item => item.age === 21));
console.log("Array 15 Find Index 4 : ", arr15.findIndex(item => item.age === 22));
console.log("Array 15 Find Index 5 : ", arr15.findIndex(item => item.age === 1));
console.log("\n");

/* return array of all matching items, return empty array when no matching found */
console.log("Array 15 Filter : ", arr15.filter(item => item.age === 1 && item.name === "sagar"));
console.log("\n");

/* return true if every item meet condition */
const arr16 = [{ isSelected: true }, { isSelected: true }, { isSelected: true }];
console.log("Array 16 Every - all item is true so return : ", arr16.every(item => item.isSelected === true));
console.log("Array 16 Every - all item is not false so return: ", arr16.every(item => item.isSelected === false));
console.log("Array 16 Some - some item is true so return : ", arr16.some(item => item.isSelected === true));
console.log("Array 16 Some - some item is not false so return false : ", arr16.some(item => item.isSelected === false));
console.log("\n");

/* return true if any item meet condition */
const arr17 = [{ isSelected: true }, { isSelected: true }, { isSelected: false }];
console.log("Array 17 Every - all item is not true so return : ", arr17.every(item => item.isSelected === true));
console.log("Array 17 Every - all item is not false so return : ", arr17.every(item => item.isSelected === false));
console.log("Array 17 Some - some item is true so return true : ", arr17.some(item => item.isSelected === true));
console.log("Array 17 Some - some item is false so return true : ", arr17.some(item => item.isSelected === false));
console.log("\n");

/* convert nested array to flat array */
const arr18 = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
console.log("Array 18 Flat Array : ", arr18.flat());
console.log("\n");

/* convert nested array to flat array using flatMap*/
const arr19 = [[1, 4, 2, 4], [11, 20, 30, 22], [14, 35, 26], [17, 88, 29, 10]];
console.log("Array 19 Flat Map Array 1 : ", arr19.flatMap(item => item.slice()));
console.log("Array 19 Flat Map Array 2 : ", arr19.flatMap(item => item.slice(0)));
console.log("Array 19 Flat Map Array 3 : ", arr19.flatMap(item => item.slice(0, 2)));
console.log("Array 19 Flat Map Array 4 : ", arr19.flatMap(item => item.slice(1, 3)));
console.log("Array 19 Flat Map Array 5 : ", arr19.flatMap(item => item.slice(1, 5)));
console.log("\n");

/* Sort number array */
const arr20 = [4, 30, 1000, 21, 1];
console.log("Array 20 Reverse number array : ", arr20.reverse())
console.log("Array 20 Sort number array ascending order : ", arr20.sort((a, b) => a - b));
console.log("Array 20 Sort number array descending order : ", arr20.sort((a, b) => b - a));
console.log("\n");

/* Sort string array */
const arr21 = ["zA", "cB", "bz", "Az", "aZ", "aa", "B", "qd", "Qd", "pz", "sR"];
const sorter = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
console.log("Array 21 Reverse string array 1 : ", arr21.sort())
console.log("Array 21 Reverse string array 2 : ", arr21.sort(sorter))
console.log("\n");

/* Sort array of object */
const arr22 = [
  { color: "red" },
  { color: "green" },
  { color: "blue" },
  { color: "cyan" },
  { color: "magenta" },
  { color: "yellow" },
  { color: "black" }
];

const objSorter = (a, b) => {
  a = a.color.toLowerCase();
  b = b.color.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
console.log("Array 22 Sort array of object : ", arr22.sort(objSorter))

/* reduce method of array on number */
const arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArr23 = arr23.reduce((acc, num) => acc + num, 0)
console.log("Array 23 Reduce array number : ", resultArr23);
console.log("\n");

/* reduce method of array on string */
const arr24 = ["lion", "tiger", "lion", "tiger", "lion", "leopard", "lion", "tiger", "lion", "leopard"];
const resultArr24 = arr24.reduce((acc, item) => {
  if (acc[item]) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});
console.log("Array 24 Reduce array string :", resultArr24);
console.log("\n");

/* Miscellaneous array functions */
const arr25 = [2, 4, 2, 5, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array 25 Map : ", new Map(arr25.entries()));
console.log("Array 25 Set 1 : ", new Set(arr25));
console.log("Array 25 Set 2 : ", new Set(arr25.entries()));
console.log("Array 25 Object Assign : ", Object.assign({}, arr25));

/* Nested Array */
const arr26 = [[[['4th dimension']]]];
console.log("Array 26 Dimentions 1 : ", arr26[0][0][0][0]);
console.log("Array 26 Dimentions 2 : ", arr26);
console.log("\n");

/* Add Array Property On Array Constuctor */
const arr27 = new Array();
arr27.getFullName = 'Sagar Ninave';
console.log("Array 27 Property Value By Constructor :", arr27.getFullName);
console.log("\n");

/* Add Array Property On Empty Array */
const arr28 = [];
arr28.getFullName = "Sgar Ninave";
console.log("Array 28 Property Value By Empty Array :", arr28.getFullName);

Array.prototype.fullName = 'Sagar Vijay Ninave'; // all instances of Array() now inherit a fullName property
Array.prototype.age = '26 Years'; // all instances of Array() now inherit a fullName property

const arr29 = new Array();
console.log("Array 29 Instance :", arr29, 'background: #222; color: #bada55');
console.log("Array 29 Constructor :", arr29.constructor);
console.log("Array 29 Prototype :", arr29.constructor.prototype);
console.log("Array 29 Prototype Property 1 :", arr29.constructor.prototype.fullName);
console.log("Array 29 Prototype Property 2 :", arr29.constructor.prototype.age);
console.log("Array 29 Constructor Property Prototype 1 :", Array.prototype.fullName)
console.log("Array 29 Constructor Property Prototype 2 :", Array.prototype.age)
console.log("Array 29 Array Property 1 :", arr29.fullName)
console.log("Array 29 Array Property 2 :", arr29.age)

arr29.fullName = "Sagar Ninave";
arr29.age = "26";
console.log("Array 29 Property 1 Chnaged Value :", arr29.fullName)
console.log("Array 29 Property 2 Chnaged Value :", arr29.age)
console.log("\n");

// this code only works in browsers that supports __proto__ access
Array.prototype.fullName = 'Sagar Ninave';
const arr30 = new Array();
console.log("Array 30 __proto__ :", arr30.__proto__.fullName); // logs fullName, because arr30.__proto__ = Array.prototype
console.log("\n");
