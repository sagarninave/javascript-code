/*
* USE OF GETTER AND SETTER
* used when you want to control access to object properties and add behavior to property
* Encapsulation and Data Validation: use setters to enforce data validation rules, ensuring only valid data is assigned to a property.
* Computed Properties: Getters allow you to compute and return a value, useful for derived or calculated properties.
*/

/*
 * getter data using function expression, which is not exactly getter.
 * we are just adding function which return a value of current object
 */
const getter1 = {
  firstName: "sagar",
  lastName: "ninave",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(getter1.fullName()); /* calling by function expressing */

/*
 * doing same like above example 1.
 * instead adding direct function it has given key as fullName
 */
const getter2 = {
  firstName: "sagar",
  lastName: "ninave",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(getter2.fullName()); /* calling by function expressing */

/*
 * Here return the undefined value because it does not arrow function does not understand the 'this' keyword
 */
const getter3 = {
  firstName: "sagar",
  lastName: "ninave",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(getter3.fullName()); /* calling by function expressing */

/*
 * CORRECT - TO implement getter we need to use 'get' keyword.
 * In case of get key do not need to write expression as function call
 */
const obj5 = {
  firstName: "sagar",
  lastName: "ninave",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(
  obj5.fullName
); /* access by object property unlike function call expressing */

/* set method using set keyword */
const setter1 = {
  firstName: "sagar",
  lastName: "ninave",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fName(f_name) {
    this.firstName = f_name;
  },
  set lName(l_name) {
    this.lastName = l_name;
  },
};
console.log(setter1.fullName());
setter1.fName = "saranshu";
console.log(setter1.fullName());
setter1.lName = "umaredkar";
console.log(setter1.fullName());

/* 
* without set method it will not identified the function is setter function.
* We need to define 'set' keyword to the function
*/
const setter2 = {
  firstName: "sagar",
  lastName: "ninave",
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  fName: function (f_name) {
    this.firstName = f_name;
  },
  lName: function (l_name) {
    this.lastName = l_name;
  }
}
console.log(setter2.fullName())
setter2.fName = 'saranshu';
console.log(setter2.fullName())
setter2.lName = 'umaredkar';
console.log(setter2.fullName())

/* getter and setter full example */
const person = {
  _name: "",
  get name() {
    return this._name;
  },
  set name(newName) {
    if (newName.length >= 3) {
      this._name = newName;
    } else {
      console.log("Name is too short.");
    }
  },
};

person.name = "John"; /* Sets the name to "John" */
console.log(person.name); /* Gets the name */
person.name = "Al"; /* Logs "Name is too short." and doesn't update the name */
