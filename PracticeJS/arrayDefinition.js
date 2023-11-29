console.log(`\n
 /* 
  * Creation of array
  */`);

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
