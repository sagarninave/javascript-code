console.group("%c Check in window object", "color:#B53471");
var myStringVar = 'myString';
var myFunctionVar = function () { };
myFunction = function () { };
let myString1 = 'myString';
let myString2 = 'myString';

console.log("'myStringVar' in window :", 'myStringVar' in window); // returns true
console.log("'myFunctionVar' in window :", 'myFunctionVar' in window); // return true
console.log("'myFunction' in window :", 'myFunction' in window); // return true
console.log("'myString' in window :", 'myString' in window); // returns true
console.log("'myString1' in window :", 'myString1' in window); // returns true
console.log("'myString2' in window :", 'myString2' in window); // returns true
console.log("\n");
console.groupEnd();