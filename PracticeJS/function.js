// /* Function called with normal function with function keyword */
// var addNumbersB = function (num1, num2) { return num1 + num2; };
// console.log("Function called with normal function with function keyword : ", addNumbersB(2, 2)); // logs 4

// /* Function called with consructor double comma-separated string with arguments */
// var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
// console.log("Function called with consructor double comma-separated string with arguments : ", addNumbersA(2, 2)); // logs 4

// /* Function called with consructor single comma-separated string with arguments */
// var timesFunction = new Function('num1,num2', 'return num1 * num2');
// console.log("Function called with consructor single comma-separated string with arguments : ", timesFunction(2, 2)); // logs '4'


// /* functions return false or undefined even if we don */
// var isReturn = function () { return true; }

// /* functions return undefined even if we don't */
// var isNotReturn = function () { return };

// /* logs true because a value is always returned, even if we don't specifically return one */
// console.log("return false because it has return statement ", isReturn() === undefined);
// console.log("return false because it has return statement ", isNotReturn() === undefined);


// /* functions can be stored in variables (funcA), arrays (funcB), and objects (funcC) */
// var funcA = function () { }; // called like so: funcA()
// var funcB = [function () { }]; // called like so: funcB[0]()
// var funcC = { method: function () { } }; // too.method() or funcC['method']()

// /* functions can be sent to, and sent back from, functions */
// var funcD = function (func) { return func };
// var runFuncPassedToFuncD = funcD(function () { console.log('Function takes function as argument and return a function'); });
// runFuncPassedToFuncD();

// /* functions are objects, which means they can have properties */
// var funcE = function () { };
// funcE.names = 'sagar'; // instance property
// console.log("functions are objects, they can have properties : ", funcE.names); // logs 'sagar'

// /* function takes arguments in the form of array-live object */
// var add = function () {
//   console.log("type of array-like object : ", typeof arguments)
//   return arguments[0] + arguments[1];
// };
// console.log("array-like object : ", add(4, 4)); // returns 8



var myObject1 = {
  name: 'myObject1',
  myMethod: function () { console.log(this); }
};

myObject1.myMethod(); // logs 'myObject1'

var myObject2 = function () { console.log(this); };

myObject2(); // logs window



var foo = function foo() {
  console.log(arguments.callee); // logs foo()
  // callee could be used to invoke recursively the foo function (e.g. arguments.callee())
}();



var myFunction = function (z, s, d) {
  return arguments.length;
};

console.log(myFunction()); // logs 0 because no parameters were passed to the function


var myFunction = function (z, s, d, e, r, m, q) {
  return myFunction.length;
};

console.log(myFunction()); //logs 7


var foo = false;
var bar = false;

var myFunction = function (foo, bar) {
  arguments[0] = true;
  bar = true;
  console.log(arguments[0], bar); // logs true true
}

myFunction();

var add = function (x, y) {
  // If the parameters are not numbers, return error.
  if (typeof x !== 'number' || typeof y !== 'number') { return 'pass in numbers'; }
  return x + y;
}
console.log(add(3, 3)); // logs 6
console.log(add('2', '2')); // logs 'pass in numbers'



/* function constructor: the last parameter is the function logic,
everything before it is a parameter */
var addConstructor = new Function('x', 'y', 'return x + y');

// function statement
function addStatement(x, y) {
  return x + y;
}

// function expression
var addExpression = function (x, y) {
  return x + y;
};

console.log(addConstructor(2, 2), addStatement(2, 2), addExpression(2, 2)); // logs '4 4 4'



// function pattern
var myFunction = function () { return 'foo' };
console.log(myFunction()); // log 'foo'

// method pattern
var myObject = { myFunction: function () { return 'bar'; } }
console.log(myObject.myFunction()); // log 'bar'

// constructor pattern
var Cody = function () {
  this.living = true;
  this.age = 33;
  this.gender = 'male';
  this.getGender = function () { return this.gender; };
}
var cody = new Cody(); // invoke via Cody constructor
console.log(cody); // logs cody object and properties

// apply() and call() pattern
var greet = {
  runGreet: function () {
    console.log(this.name, arguments[0], arguments[1]);
  }
}

var cody = { name: 'cody' };
var lisa = { name: 'lisa' };

// invoke the runGreet function as if it were inside of the cody object
greet.runGreet.call(cody, 'foo', 'bar'); // logs 'cody foo bar'

// invoke the runGreet function as if it were inside of the lisa object
greet.runGreet.apply(lisa, ['foo', 'bar']); // logs 'lisa foo bar'

/* Notice the difference between call() and apply() in how parameters are sent to the function being invoked */



// function(){console.log('hi');}; // anonymous function, but no way to invoke it

// create a function that can invoke our anonymous function
var sayHi = function (f) {
  f(); // invoke anonymous function
}

// pass an anonymous function as parameter
sayHi(function () { console.log('hi'); }); // log 'hi'

var sayWord = function () { console.log('Word 2 yo mo!'); }(); // logs 'Word 2 yo mo!'




// most commonly used/seen in the wild
(function (msg) {
  console.log(msg);
})('Hi');

// slightly different but achieving the same thing:
(function (msg) {
  console.log(msg)
}('Hi'));

// the shortest possible solution
!function sayHi(msg) { console.log(msg); }('Hi');

// FYI, this does NOT work!
// function sayHi() {console.log('hi');}();


var foo = function () {
  var bar = function () {
    var goo = function () {
      console.log(this); // logs reference to head window object
    }();
  }();
}();


// functions can be sent to, and sent back from, functions
var foo = function (f) {
  return f;
}

var bar = foo(function () { console.log('Hi'); });

bar(); // logs 'Hi'


// Example 1
var speak = function () {
  sayYo(); // sayYo() has not been defined yet but it can still be invoked, logs 'yo'
  function sayYo() { console.log('Yo'); }
}(); // invoke

// Example 2
console.log(sum(2, 2)); // invoke sum(), which is not defined yet, but can still be invoked
function sum(x, y) { return x + y; }



var countDownFrom = function countDownFrom(num) {
  console.log(num);
  num--; // change the parameter value
  if (num < 0) { return false; } // if num < 0 return function with no recursion
  // could have also done arguments.callee(num) if it was an anonymous function
  countDownFrom(num);
};

countDownFrom(5); // kick off the function, which logs separately 5,4,3,2,1,0


var foo = 'foo';
var myObject = { foo: 'I am myObject.foo' };

var sayFoo = function () {
  console.log(this['foo']);
};

// give myObject a sayFoo property and have it point to sayFoo function
myObject.sayFoo = sayFoo;

myObject.sayFoo(); // logs 'I am myObject.foo'
sayFoo(); // logs 'foo'


var myObject = {
  func1: function () {
    console.log(this); // logs myObject
    var func2 = function () {
      console.log(this) // logs window, and will do so from this point on
      var func3 = function () {
        console.log(this); // logs window, as it’s the head object
      }();
    }();
  }
}

myObject.func1();

var foo = {
  func1: function (bar) {
    bar(); // logs window, not foo
    console.log(this); // the this keyword here will be a reference to foo object
  }
}

foo.func1(function () { console.log(this) });


var myObject = {
  myProperty: 'I can see the light',
  myMethod: function () {
    var that = this; // store a reference to this (i.e. myObject) in myMethod scope
    var helperFunction = function () { // child function
      // logs 'I can see the light' via scope chain because that = this
      console.log(that.myProperty); // logs 'I can see the light'
      console.log(this); // logs window object, if we don't use "that"
    }();
  }
}

myObject.myMethod(); // invoke myMethod




var myObject = {};

var myFunction = function (param1, param2) {
  // set via call() 'this' points to myObject when function is invoked
  this.foo = param1;
  this.bar = param2;
  console.log(this) // logs Object {foo = 'foo', bar = 'bar'}
};

myFunction.call(myObject, 'foo', 'bar'); // invoke function, set this value to myObject

console.log(myObject) // logs Object {foo = 'foo', bar = 'bar'}



var myObject = {};

var myFunction = function (param1, param2) {
  // set via apply(), this points to myObject when function is invoked
  this.foo = param1;
  this.bar = param2;
  console.log(this) // logs Object {foo = 'foo', bar = 'bar'}
};

myFunction.apply(myObject, ['foo', 'bar']); // invoke function, set this value

console.log(myObject) // logs Object {foo = 'foo', bar = 'bar'}


var Person = function (name) {
  this.name = name || 'john doe'; // this will refer to the instance created
}

var cody = new Person('Cody Lindley'); // create an instance, based on Person constructor

console.log(cody.name); // logs 'Cody Lindley'



var Person = function (x) {
  if (x) { this.fullName = x };
};

Person.prototype.whatIsMyFullName = function () {
  return this.fullName; // 'this' refers to the instance created from Person()
}

var cody = new Person('cody lindley');
var lisa = new Person('lisa lindley');

// call the inherited whatIsMyFullName method, which uses this to refer to the instance
console.log(cody.whatIsMyFullName(), lisa.whatIsMyFullName());

/* The prototype chain is still in effect, so if the instance does not have a fullName property, it will look for it in the prototype chain. Below, we add a fullName property to both the Person prototype and the Object prototype. See notes. */

Object.prototype.fullName = 'John Doe';
var john = new Person(); // no argument is passed so fullName is not added to instance
console.log(john.whatIsMyFullName()); // logs 'John Doe'



var foo = 0; // global scope
console.log(foo); // logs 0

var myFunction = function () {

  var foo = 1; // local scope

  console.log(foo); // logs 1

  var myNestedFunction = function () {

    var foo = 2; // local scope

    console.log(foo); // logs 2
  }();
}();

eval('var foo = 3; console.log(foo);'); // eval() scope



var foo = function () {
  var boo = function () {
    bar = 2; // no var used, so bar is placed in the global scope at window.bar
  }();
}();

console.log(bar); // logs 2, because bar is in the global scope

// As opposed to...

var foo = function () {
  var boo = function () {
    var doo = 2;
  }();
}();

// console.log(doo); logs undefined, doo is in the boo function scope, error occurs



var sayHiText = 'howdy';

var func1 = function () {
  var func2 = function () {
    console.log(sayHiText); // func2 scope, but it finds sayHiText in global scope
  }();
}();

// var x = 10;
// var foo = function () {
//     var y = 20;
//     var bar = function () {
//         var z = 30;
//         console.log(z + y + x); // z is local, y & z are found in the scope chain
//     } ();
// } ()

// foo(); // logs 60


var x = false;
var foo = function () {
  var x = false;
  bar = function () {
    var x = true;
    console.log(x); // local x is first in the scope so it shadows the rest
  }();
}

foo(); // logs true


var parentFunction = function () {
  var foo = 'foo';
  return function () { // anonymous function being returned
    console.log(foo); // logs 'foo'
  }
}

// nestedFunction refers to the nested function returned from parentFunction
var nestedFunction = parentFunction();

nestedFunction(); // logs foo because the returned function accesses foo via the scope chain


var countUpFromZero = function () {
  var count = 0;
  return function () { // return nested child function when countUpFromZero is invoked
    return ++count; // count is defined up the scope chain, in parent function
  };
}(); // invoke immediately, return nested function

console.log(countUpFromZero()); // logs 1
console.log(countUpFromZero()); // logs 2
console.log(countUpFromZero()); // logs 3

var myFunction = function () { };
console.log(myFunction.prototype); // logs object{}
console.log(typeof myFunction.prototype); // logs 'object'

var myFunction = function () { };

myFunction.prototype = {}; // add the prototype property and set it to an empty object

console.log(myFunction.prototype); // logs an empty object



var Foo = function Foo() { };

Foo.prototype = {}; // replace prototype property with an empty object

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo); // logs false, we broke the reference
console.log(FooInstance.constructor); // logs Object(), not Foo()

// compare to code where we do not replace the prototype value

var Bar = function Bar() { };

var BarInstance = new Bar();

console.log(BarInstance.constructor === Bar); // logs true
console.log(BarInstance.constructor); // logs Bar()



var Foo = function Foo() { };

Foo.prototype = { constructor: Foo };

var FooInstance = new Foo();

console.log(FooInstance.constructor === Foo); // logs true
console.log(FooInstance.constructor); // logs Foo()



var Foo = function Foo() { };

Foo.prototype.x = 1;

var FooInstance = new Foo();

console.log(FooInstance.x); // logs 1

Foo.prototype.x = 2;

console.log(FooInstance.x); // logs 2, the FooInstance was updated


var Foo = function Foo() { };

Foo.prototype = { x: 1 }; // the logs below still work the same

var FooInstance = new Foo();

console.log(FooInstance.x); // logs 1

Foo.prototype.x = 2;

console.log(FooInstance.x); // logs 2, the FooInstance was updated





var Foo = function Foo() { };

Foo.prototype.x = 1;

var FooInstance = new Foo();

console.log(FooInstance.x); // logs 1, as you think it would

// now let’s replace/override the prototype object with a new Object() object
Foo.prototype = { x: 2 };

console.log(FooInstance.x); // logs 1, WHAT? Shouldn't it log 2, we just updated prototype
/* FooInstance still references the same state of the prototype object that
was there when it was instantiated. */

// create a new instance of Foo()
var NewFooInstance = new Foo();

// the new instance is now tied to the new prototype object value (i.e. {x:2};)
console.log(NewFooInstance.x); // logs 2





var Person = function () { };

// all Person instances inherit a legs, arms, and countLimbs properties
Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function () { return this.legs + this.arms; };

var chuck = new Person();

console.log(chuck.countLimbs()); // logs 4






var Person = function (legs, arms) {
  // shadow prototype value
  if (legs !== undefined) { this.legs = legs; }
  if (arms !== undefined) { this.arms = arms; }
};

Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function () { return this.legs + this.arms; };

var chuck = new Person(0, 0);

console.log(chuck.countLimbs()); // logs 0





var Person = function () { this.bar = 'bar' };
Person.prototype.foo = 'foo';

var Chef = function () { this.goo = 'goo' };
Chef.prototype = new Person();
var cody = new Chef();

console.log(cody.foo); // logs 'foo'
console.log(cody.goo); // logs 'goo'
console.log(cody.bar); // logs 'bar'




var foo = { // window is implied here, window.foo
  fooMethod: function () {
    console.log('foo' + 'bar'); // window is implied here, window.alert
  }
}

foo.fooMethod(); // window is implied here, window.foo.fooMethod()









var foo = 'bar'; // foo is a global object and a property of the head/window object

var myApp = function () { // remember functions create scope
  var run = function () {
    // logs bar, foo's value is found via the scope chain in the head object
    console.log(foo);
  }();
}

myApp();






// user-defined object constructor
var CustomConstructor = function () { this.foo = 'bar'; };

// instantiate an instance of CustomConstructor
var instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject instanceof CustomConstructor); // logs true

// works the same as a native object
console.log(new Array('foo') instanceof Array) // logs true





var CustomConstructor = function CustomConstructor() { return 'Wow!'; };
var instanceOfCustomObject = new CustomConstructor();

// logs true
console.log(instanceOfCustomObject.constructor === CustomConstructor);

// returns a reference to CustomConstructor() function
// returns 'function() { return 'Wow!'; };'
console.log(instanceOfCustomObject.constructor);
