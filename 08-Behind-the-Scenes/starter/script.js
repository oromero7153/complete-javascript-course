'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //creating new variable with same name as outer scope's variable.
//       const firstName = 'Jonas'; // this will print in str variable but now output variable

//       //reassigning outer scope's variable.
//       output = 'new output!';

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //console.log(str); out of scope
//     console.log(millenial); // out of scope but we can access it since it is a var variable.
//     //console.log(add(2, 3)); // strict put this out scope
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Steven';
// calcAge(1988);
// //console.log(age);
// //printAge(); these are both out scope.

// // hoisting with variables
// console.log(me);
// //console.log(job); creates initialization error because the variablea are declared after.
// //console.log(year);

// var me = 'Steven';
// let job = 'Teacher';
// const year = 1991;

// //function
// console.log(addDecl(2, 3));
// //console.log(addExpr(2, 3));
// //console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function addDecl(a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b; // var makes it undefined.

// //example this won't work because var essentially makes the variable undefined
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all items deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//console.log(this);

// const calcAge = function (birthYear) {
//   //console.log(2037 - birthYear);
//   //console.log(this); // it is own this keyword which hasn't been defined
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   //console.log(2037 - birthYear);
//   //console.log(this); // arrow functions use the lexical "this" keyword.
// };
// calcAgeArrow(1988);

// const steven = {
//   year: 1988,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// steven.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = steven.calcAge;
// matilda.calcAge();

// const f = steven.calcAge;
// f();

//var firstName = 'matilda';

// const steven = {
//   firstName: 'Steven',
//   year: 1988,
//   calcAge: function () {
//     //console.log(this);
//     console.log(2037 - this.year);

//     //solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     //Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };
// steven.greet();
// steven.calcAge();

// // arguments keyword
// const addExpr = function addDecl(a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

/*let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);
*/

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage:', jessica);
console.log('after marriage:', marriedJessica);

//marriedJessica = {}; the variable is a constant

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);
