// function a() {
//   c();
//   function c() {
//     console.log(x);
//   }
// }
// var x = 10;
// a();

// var x = 10;
// (() => {
//   console.log(x);
//   let x = 100;
//   console.log(x);
// })();

// var x = 10;
// (function () {
//   var x = 100;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 200;
//   })();
// })();

// Shadowing
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 10;
// console.log(a);
// function x() {
//   var a = 20;
//   console.log(a);
//   function z() {
//     var a = 50;
//     console.log(a);
//   }
//   return z;
// }
// x()();

// Closure
// function outerFunction() {
//   // Variable declared in the outer function's scope
//   let outerVariable = "I am from the outer function";

//   // Inner function (closure)
//   return function innerFunction() {
//     // Accessing the outer variable
//     console.log(outerVariable);
//   }

// }

// // Creating a closure by calling outerFunction
// const closure = outerFunction();

// // Calling the closure (inner function) later
// closure(); // Outputs: I am from the outer function

(() => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
})();
