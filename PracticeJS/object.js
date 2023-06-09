// Object constructor:
const object1 = new Object();
console.log(object1)
console.log("------------------------------------------------------------------------\n")

object1.message = "hello team"
object1.data = "data"
console.log(object1.message);
console.log(object1.data);

for(i of Object.keys(object1)){
  console.log("key : ", i)
}
for(i of Object.values(object1)){
  console.log("values : ", i)
}
console.log("------------------------------------------------------------------------\n")


// create an empty object with no properties
var emptyObj1 = new Object();
var emptyObj2 = new Object(undefined);
var emptyObj3 = new Object(null);
console.log(typeof emptyObj1, typeof emptyObj2, typeof emptyObj3); // logs 'object object object'
console.log(emptyObj1, emptyObj2, emptyObj3); // logs 'object object object'
console.log("___________________________________________________________________________\n");


// the property foo is waiting for a value, so we set its initial value to null
var myObjectObject = { foo1: null, foo2: undefined, foo3: "data" };
console.log(myObjectObject.foo1); //logs 'null'
console.log(myObjectObject.foo2); //logs 'null'
console.log(myObjectObject.foo3); //logs 'null'
console.log("___________________________________________________________________________\n");


/* Use Object() constructor to create a string, number, array, function, boolean, and regex object. */
/* Creating a string, number, array, function, boolean, and regex object instance via the Object() constructor is really never done. I am just demonstrating that it can be done */
console.log(new Object('foo'));
console.log(new Object(1));
console.log(new Object([]));
console.log(new Object(function () { }));
console.log(new Object(true));
console.log(new Object(/\bt[a-z]+\b/));
console.log("___________________________________________________________________________\n");


var foo = { bar: 'bar', jar: "jar" };
console.log(foo); // logs false, because bar was deleted from foo
delete foo.bar;
console.log('bar' in foo); // logs false, because bar was deleted from foo
console.log(foo); // logs false, because bar was deleted from foo
console.log("___________________________________________________________________________\n");


var cody = new Object(); // creating cody Object() object

cody.living = true; // setting properties 
cody.age = 33;
cody.gender = 'male';
cody.getGender = function () { return cody.gender; };

// getting properties
console.log(
  "\n",
  cody.living,
  cody.age,
  cody.gender,
  cody.getGender() // just slap the function invocation on the end!
); // logs 'true 33 male male'

// updating properties, very similar to setting
cody.living = false;
cody.age = 99;
cody.gender = 'female';
cody.getGender = () => cody.gender;

console.log("\n", cody);
console.log("\n", cody.getGender());
console.log("___________________________________________________________________________\n");


// Object's create method:
const object2 = Object.create(null);
console.log(object2)
console.log("------------------------------------------------------------------------\n")

object2.name = "sagar"
console.log(object2)
console.log("------------------------------------------------------------------------\n")

// Object literal syntax:
var object3 = {
  name: "sagar",
  age: 25
};
console.log(object3);
console.log("------------------------------------------------------------------------\n")

// Function constructor:
function Person1(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = 27;
  this.full_name = `${this.first_name} ${this.last_name}`
}
const object4 = new Person1("pankaj", "gupta");
console.log(object4)
console.log(object4.full_name)
console.log(`${object4.first_name} ${object4.last_name}`)
console.log("------------------------------------------------------------------------\n")

Person1.prototype.name = "Sudheer";
console.log(object4.name)
console.log("------------------------------------------------------------------------\n")

Person1.prototype.my_full_name = function () { return `${this.first_name} ${this.last_name} 1` };
console.log(object4.my_full_name())

class Person2 {
  constructor(name) {
    this.name = name;
  }
}
const object5 = new Person2("Sudheer");
console.log(object5)
console.log(object5.name)
console.log("------------------------------------------------------------------------\n")

var cody = {
  age: 23,
  gender: 'male'
};

for (var key in cody) { // key is a variable used to represent each property name 
  // avoid properties inherited from the prototype chain 
  if (cody.hasOwnProperty(key)) {
    console.log(key);
    console.log(cody.hasOwnProperty(key));
  }
}
console.log("___________________________________________________________________________\n");


Object.prototype.foo = 'foo';
var myString = 'bar';
// logs 'foo', being found at Object.prototype.foo via prototype chain
console.log(myString.foo);
console.log("___________________________________________________________________________\n");


var foo = {};
console.log(foo.constructor === Object) // logs true, because object() constructed foo
console.log(foo.constructor) // points to the Object() constructor function
console.log(foo) 
console.log("___________________________________________________________________________\n");

var myObject = { foo: 'value' };
console.log(myObject.hasOwnProperty('foo')) // logs true
// vs. a property from the prototype chain
console.log(myObject.hasOwnProperty('toString'));  // logs false
console.log("___________________________________________________________________________\n");


var myObject = { foo: 'value' };
console.log('foo' in myObject); // logs true
console.log("___________________________________________________________________________\n");


var myObject = { foo: 'value' };
console.log('toString' in myObject); // logs true
console.log("___________________________________________________________________________\n");
