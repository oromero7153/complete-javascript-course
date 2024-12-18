'use strict';
///////////////////////////////////////
/*//video 219
const Person = function (firstName, birthYear) {
  //constructor functions convention start with a capital letter. only function decalarations and expressions
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create a method in a constructor function.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //};
};

const jonas = new Person('Jonas', 1991); //new operator is needed for constructor function.
console.log(jonas);

//1. New {obejct} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2001);
const steven = new Person('Steven', 1988);
console.log(matilda, steven);

console.log(jonas instanceof Person);

// STATIC METHOD!! they are not inherited into the prototype. VIDEO 226
Person.hey = function () {
  console.log('Hey there 👍');
  console.log(this);
};
Person.hey();

///////////////////////////////////////
//prototypes video 220
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
steven.calcAge();

Person.prototype.species = 'Homo Sapiens'; //species property is not inside of the jonas object, but only has access because of the Person prototype.
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//prototypal inheritance on built in objects video 222

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Person.protoype
console.log(jonas.__proto__.__proto__.__proto__); //object.protoype... returns null, top of prototyep chain

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 7, 8, 7, 3, 5, 4, 7]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Creating your own method is not a good idea, you can create bugs
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

//1. Constructor
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
//2.
Car.prototype.accelerate = function () {
  console.log(10 + this.speed);
};

//3.
Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

//4.
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.accelerate();
*/

///////////////////////////////////////
// es6 classes video 224

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // static method in class
  static hey() {
    console.log('Hey there 👍');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

//manually add method to the prototype
PersonCl.prototype.greet = function () {
  console.log(`hey ${this.fullName}`);
};

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode.

///////////////////////////////////////
// Getters and Setters video 225
// basically fuctions that get and set a value, but they look like regular properties. useful for data validation.

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 300, 12, 525],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // call the get as a property, in this case, just writing latest.

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create video 227
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1988;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

//1.
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //2
  get speedUS() {
    return console.log(this.speed / 1.6);
  }
  //3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  //4
  accelerate() {
    console.log(10 + this.speed);
  }
  brake() {
    console.log(this.speed - 5);
  }
}

const ford = new Car2('Ford', 120);
ford.speedUS;
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
