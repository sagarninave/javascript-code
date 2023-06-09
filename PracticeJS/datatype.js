console.group("%c Check typeof assigned variable", "color: green")
// primitive values
var myNull = null;
var myUndefined = undefined;
var myString1 = "my string 1";
var myNumber1 = 10;
var myBoolean1 = true;

console.log(typeof myNull, "=>", myNull); // logs object? WHAT? Be aware...
console.log(typeof myUndefined, "=>", myUndefined); // logs undefined
console.log(typeof myString1, "=>", myString1); // logs string string
console.log(typeof myNumber1, "=>", myNumber1); // logs number number
console.log(typeof myBoolean1, "=>", myBoolean1); // logs boolean boolean
console.groupEnd();
console.log("\n");

console.group("%c Check typeof assigned variable created by constructor", "color: red")
// Complex Values
var myNumber2 = new Number(23);
var myString2 = new String('male');
var myBoolean2 = new Boolean(false);
var myObject1 = new Object();
var myArray1 = new Array('foo', 'bar');
var myFunction1 = new Function("x", "y", "return x * y");
var myDate1 = new Date();
var myRegExp1 = new RegExp('\\bt[a-z]+\\b');
var myError1 = new Error('Warn!');

console.log(typeof myNumber2, "=>", myNumber2); // logs object
console.log(typeof myString2, "=>", myString2); // logs object
console.log(typeof myBoolean2, "=>", myBoolean2); // logs object
console.log(typeof myObject1, "=>", myObject1); // logs object
console.log(typeof myArray1, "=>", myArray1); // logs object
console.log(typeof myFunction1, "=>", myFunction1); // logs function? WHAT? Be aware...
console.log(typeof myDate1, "=>", myDate1); // logs object
console.log(typeof myRegExp1, "=>", myRegExp1); // logs function? WHAT? Be aware...
console.log(typeof myError1, "=>", myError1.message); // logs object
console.groupEnd();
console.log("\n");

console.group("%c Check created value is created by constructor", "color: blue")
var myNumber3 = new Number('23');
var myNumber3L = 23; // literal shorthand
var myString3 = new String('male');
var myString3L = 'male'; // literal shorthand
var myBoolean3 = new Boolean('true');
var myBoolean3L = true; // literal shorthand
var myObject2 = new Object();
var myObject2L = {}; // literal shorthand
var myArray2 = new Array();
var myArray2L = []; // literal shorthand
var myFunction2 = new Function();
var myFunction2L = function () { }; // literal shorthand
var myDate2 = new Date();
var myRegExp2 = new RegExp('/./');
var myRegExp2L = /./; // literal shorthand
var myError2 = new Error();

console.log(myNumber3.constructor === Number, myNumber3.constructor);
console.log(myNumber3L.constructor === Number, myNumber3L.constructor);
console.log(myString3.constructor === String, myString3.constructor);
console.log(myString3L.constructor === String, myString3L.constructor);
console.log(myBoolean3.constructor === Boolean, myBoolean3.constructor);
console.log(myBoolean3L.constructor === Boolean, myBoolean3L.constructor);
console.log(myObject2.constructor === Object, myObject2.constructor);
console.log(myObject2L.constructor === Object, myObject2L.constructor);
console.log(myArray2.constructor === Array, myArray2.constructor);
console.log(myArray2L.constructor === Array, myArray2L.constructor);
console.log(myFunction2.constructor === Function, myFunction2.constructor);
console.log(myFunction2L.constructor === Function, myFunction2L.constructor);
console.log(myDate2.constructor === Date, myDate2.constructor);
console.log(myRegExp2.constructor === RegExp, myRegExp2.constructor);
console.log(myRegExp2L.constructor === RegExp, myRegExp2L.constructor);
console.log(myError2.constructor === Error, myError2.constructor);
console.groupEnd();
console.log("\n");

console.group("%c Add props to any native constructors which produce an object", "color: gray")
var myString4 = new String();
var myNumber4 = new Number();
var myBoolean4 = new Boolean(true);
var myObject4 = new Object();
var myArray4 = new Array();
var myFunction4 = new Function('return 2+2');
var myRegExp4 = new RegExp('\bt[a-z]+\b');

myString4.prop = 'string';
myNumber4.prop = 'number';
myBoolean4.prop = 'boolean';
myObject4.prop = 'object';
myArray4.prop = 'array';
myFunction4.prop = 'function';
myRegExp4.prop = 'regex';

console.log("Props :", myString4.prop, ",", "Constructor Object:", myString4);
console.log("Props :", myNumber4.prop, ",", "Constructor Object:", myNumber4);
console.log("Props :", myBoolean4.prop, ",", "Constructor Object:", myBoolean4);
console.log("Props :", myObject4.prop, ",", "Constructor Object:", myObject4);
console.log("Props :", myArray4.prop, ",", "Constructor Object:", myArray4);
console.log("Props :", myFunction4.prop, ",", "Constructor Object:", myFunction4);
console.log("Props :", myRegExp4.prop, ",", "Constructor Object:", myRegExp4);
console.groupEnd();
console.log("\n");

console.group("%c Don/'t add instance properties/props with primitive/literal values which does not produce an object", "color: #0984e3 ")
var myString5 = 'string';
var myNumber5 = 1;
var myBoolean5 = true;

myString5.prop = "ss";
myNumber5.prop = true;
myBoolean5.prop = true;

console.log(`%cValue : ${myString5}, Props : ${myString5.prop}`); // logs undefined, undefined, undefined
console.log(`Value : ${myNumber5}, Props : ${myNumber5.prop}`); // logs undefined, undefined, undefined
console.log(`Value : ${myBoolean5}, Props : ${myBoolean5.prop}`); // logs undefined, undefined, undefined
console.groupEnd();
console.log("\n");

console.group("%c Create string object using the new keyword and the String() constructor", "color:#00b894")
var stringObject = new String('foo');
console.log("typeOf :", typeof stringObject); 
console.log("Value :", stringObject); 
console.log("valueOf :", stringObject.valueOf()); 
console.groupEnd();
console.log("\n");

console.group("%c Create string literal/primitive by directly using the String constructor", "color:#273c75")
var stringObjectWithOutNewKeyword = String('foo');
console.log("typeOf :", typeof stringObjectWithOutNewKeyword); 
console.log("Value :", stringObjectWithOutNewKeyword); 
console.groupEnd();
console.log("\n");

console.group("%c Create string literal/primitive (constructor leveraged behind the scene)", "color:#4cd137")
var stringLiteral ='foo';
console.log("typeOf :", typeof stringLiteral); 
console.log("Value :", stringLiteral); 
console.groupEnd();
console.log("\n");

console.group("%c Create number object using the new keyword and the Number() constructor", "color:#00b894")
var numberObject = new Number(1);
console.log("typeOf :", typeof numberObject); 
console.log("Value :", numberObject); 
console.log("valueOf :", numberObject.valueOf()); 
console.groupEnd();
console.log("\n");

console.group("%c Create string literal/primitive by directly using the String constructor", "color:#00a8ff")
var numberObjectWithOutNew = Number(1); // without using new keyword
console.log("typeOf :", typeof numberObjectWithOutNew); // logs 'number'
console.log("Value :", numberObjectWithOutNew); // logs 1
console.groupEnd();
console.log("\n");

console.group("%c Create number literal/primitive (constructor leveraged behind the scene)", "color:#7f8fa6")
var numberLiteral = 1;
console.log("typeOf :", typeof numberLiteral);  // logs 'number'
console.log("Value :", numberLiteral);  // logs 1
console.groupEnd();
console.log("\n");

console.group("%c Parameter passed to Boolean() = 0 = false, thus bool1 = false", "color:#fa983a")
var bool1 = new Boolean(0)
console.log("Object Value : ", bool1);
console.log("Value : ", bool1.valueOf());
console.groupEnd();
console.log("\n");

console.group("%c Parameter passed to Boolean() = Math = true, thus bool2 = true", "color:#b71540")
var bool2 = new Boolean(Math)
console.log("Object Value : ", bool2);
console.log("Value : ", bool2.valueOf());
console.groupEnd();
console.log("\n");

console.group("%c We have a false boolean object, but objects are truthy)", "color:#ff793f")
var bool3 = new Boolean(false);
console.log("Object Value : ", bool3);
console.log("Value : ", bool3.valueOf());
console.groupEnd();
console.log("\n");

console.group("%c All of these return a false boolean value", "color:#ff5252")
console.log("Boolean('') : ", Boolean(''));
console.log("Boolean(0) : ", Boolean(0));
console.log("Boolean(-0) : ", Boolean(-0));
console.log("Boolean(null) : ", Boolean(null));
console.log("Boolean(false) : ", Boolean(false));
console.log("Boolean(undefined) : ", Boolean(undefined));
console.groupEnd();
console.log("\n");

console.group("%c All of these return a true boolean value", "color:#40407a")
console.log("Boolean(1789) : ", Boolean(1789));
console.log("Boolean(Math) : ", Boolean(Math));
console.log("Boolean('false') : ", Boolean('false')); // 'false' as a string is not false the boolean value
console.log("Boolean(Array()) : ", Boolean(Array()));
console.log("Boolean({}) : ", Boolean({}));
console.groupEnd();
console.log("\n");

console.group("%c Confirm that undefined is a property of the global scope", "color:#40407a")
console.log(undefined in this); // logs true
console.log(null in this); // logs true
console.log(this === window); // logs true in browser, not in node  
console.groupEnd();
console.log("\n");