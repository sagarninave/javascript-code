# Javascript

what make async function different than normal function
-> async function always returns a promise
-> if a function does not return a value it will automatically wrapped a value inside the promise and return a promise in async function

what async and await?
-> it is used to handle promises
-> await can only used inside async function (ask why not)
-> if use without async it gives syntax error

how to resolve promise
-> by writing await in front of promise
-> e.g. const data = await Promise


time tidden javascript wait for none 

// types
//   primitive types
//     number, string, boolean, bigint symbols(null, undefined) 
//   non primitive types 
//     array, object

// variables
//   var - functional scope, redefine
//   let - block scope, redefine
//   const - block scope, no redefine

// operations
//   comparison
//   arithmetic
//   assignment
//   logical
//   bitwise
//   string

// events - get the changes in the state of object

// Types of events 

// way to handle events
//   Event Listener
//   Event Handler

// what is operators, Precedence, 

// object 
// object related tricky questions 
// object methods 

//   creation by 
//     const car = {}
//     const car = new Object()
//     const car = Object.create()
//     function Car(brand, model) { // Car serve as constructor for object
//       this.brand = brand
//       this.model = model
//     }

// array 
// array related tricky questions 
// array methods 

// getter and setter- use on object 
// use case of setter and getter and scenario
// on which data type getter and setter works 

// constructor in class initialize a properties

// what is static methods

// what is generators in javascripts, yield

// call bind apply

// inheritance in javascript

// multiple use cases of javascript loop for, for---of, for...in, while, do...while

// type conversion - implicit(automatic conversion) and explicit(manual conversion)

// callback function- pass a function as an asument to a function is a callback function

// promises - handle asyncronous operations, three states (pending, fulfill, rejected.)
// what promise return if we do not use then and catch.

// async and await 

// Closures

// Prototyping - property of an object with name of prototype, it is a default object and initila value id unfefined, use to add properties and methods to constructor function
// when to use, why to use, why it is given, alternative,

// New feature of ES module

// generators - work with functions with iterators
// function* d(){
//     yield 1;
//     yield 2;
// }
// const d1 = d();
// console.log(d1.next().value)
// console.log(d1.next().value)

// unicode

// inheritance

diff between javascript and ecma script
ES6 and before after
new No. method is es5


Execution Context
- everything in javascript happens in the execution contexts