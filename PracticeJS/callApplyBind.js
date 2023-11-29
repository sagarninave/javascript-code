/* example 1 - call */
let user1 = {
  firstName: "Sagar",
  lastName: "Ninave",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

let user2 = {
  firstName: "Sanket",
  lastName: "Wankhede",
};

console.log(`/*
 * Call method in the property
 */`);
user1.fullName();
user1.fullName.call(user2);

/* example 2 - call and apply */

function fullName(email, mobile) {
  console.log(`${this.firstName} ${this.lastName}, ${email}, ${mobile}`);
}

let user3 = {
  firstName: "Dipak",
  lastName: "Hedaoo",
};

let user4 = {
  firstName: "Vishal",
  lastName: "Kashikar",
};

let user5 = {
  firstName: "Manthan",
  lastName: "Retar",
};

console.log(`
/*
 * Call and apply method independently
 */`);

/* user call when you want to send params in destructured way */
fullName.call(user3, "dipak@gmail.com", 9657445206);
fullName.call(user4, "vishal@gmail.com", 9657445206);

/* use apply when you want to send params in array */
fullName.apply(user5, ["manthan@gmail.com", 9657445206]);

/* example 3 - bind   */
/* parameters will bind to the function and return a new function to future use */

console.log(`
/*
 * parameters bind to the method
 */`);

const user1Func = fullName.bind(user3, "dipak@gmail.com", 9657445206);
const user2Func = fullName.bind(user4, "vishal@gmail.com", 9657445206);
const user3Func = fullName.bind(user5, ["manthan@gmail.com", 9657445206]);
user1Func();
user2Func();
user3Func();

console.log(`
/*
 * full call, apply and bind example with class
 */`);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello(greeting) {
    console.log(
      `${greeting}, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Using 'call' to invoke 'sayHello' with a custom greeting and 'this' context
person1.sayHello.call(person2, "Hi"); // Output: "Hi, my name is Bob and I am 25 years old."

// Using 'apply' to invoke 'sayHello' with an array of arguments and 'this' context
person1.sayHello.apply(person2, ["Hello"]); // Output: "Hello, my name is Bob and I am 25 years old."

// Using 'bind' to create a new function with a fixed 'this' context
const sayHelloToBob = person1.sayHello.bind(person2, "Hey");
sayHelloToBob(); // Output: "Hey, my name is Bob and I am 25 years old."

let sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)(4)(5)())