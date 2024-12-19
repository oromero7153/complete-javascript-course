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
// Coding Challenge #1 video 223

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
/*
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

  //Static methods are called directly on the class, not on instances of the class. Static methods cannot access this keyword, as they are not associated with any specific instance. Static methods are often used for utility functions that don't need access to instance-specific data.
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
// Coding Challenge #2 video 228

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
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
*/

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions... video 229
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // we use the call method to set the this keyword to the new construct of student.
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype); // we use Object.create because we want to inherit from the Person.prototype, not be the exact same thing.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

///////////////////////////////////////
// Coding Challenge #3   video 230

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h.`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.accelerate();
*/
/*
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes  video 231

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first. Super accesses the this keyword.
    super(fullName, birthYear); // Super is the constructor from the parent class. you dont need a super if you are not adding any new properties.
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create  video 232

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/
/*
///////////////////////////////////////
// Another Class Example  video 233
class Account {
  constructor(ownerName, currency, pin) {
    this.ownerName = ownerName;
    this.currency = currency;
    this.pin = pin;
    (this.movements = []), (this.locale = navigator.language);
    console.log(`Thanks for opening an account ${ownerName}`);
  }
  //public interface
  deposit(value) {
    this.movements.push(value);
  }
  withdrawal(value) {
    this.deposit(-value);
  }

  approvedLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.approvedLoan(value)) {
      this.deposit(value);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-50);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1);
*/
///////////////////////////////////////
// Encapsulation: Private Class Fields and Methods  video 234

// These fields have to be outside of the constructor.
//1. Public Fields
//2. Private Fields
//3. Public Methods
//4. Private Methods.
//STATIC VERSION OF THESE 4

class Account {
  //Public Fields
  locale = navigator.language;
  bank = 'Bankist';
  //Private Fields
  #movements = [];
  #pin; // declaring the variable, empty, outside of the constructor allows you to use the variable in the constructor.

  constructor(ownerName, currency, pin) {
    this.ownerName = ownerName;
    this.currency = currency;
    this.#pin = pin;
    // (this.movements = []), //(this.locale = navigator.language);
    console.log(`Thanks for opening an account ${ownerName}`);
  }
  //public interface (API).. public methods.

  getMovements() {
    return this.#movements;
    // cannot return 2 things, so it is not chainable.
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }
  withdrawal(value) {
    this.deposit(-value);
    return this;
  }
  //Private Method
  #approvedLoan(value) {
    // FAKE METHOD FOR TESTING PURPOSE
    return true;
  }

  requestLoan(value) {
    if (this.#approvedLoan(value)) {
      this.deposit(value);
      console.log(`Loan Approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-50);
const moves = acc1
  .deposit(250)
  .requestLoan(15000)
  .withdrawal(140)
  .withdrawal(400)
  .deposit(252)
  .getMovements();
console.log(acc1);
console.log(moves);
///////////////////////////////////////
// Chaining Methods  video 235
// add -- return this-- at the end of each method to allow to be chainable.

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`The ${this.make}'s battery is at ${this.#charge}%.`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%.`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(95).brake().accelerate().brake();
