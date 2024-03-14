'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope's variable.
      const firstName = 'Jonas'; // this will print in str variable but now output variable

      //reassigning outer scope's variable.
      output = 'new output!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); out of scope
    console.log(millenial); // out of scope but we can access it since it is a var variable.
    //console.log(add(2, 3)); // strict put this out scope
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Steven';
calcAge(1988);
//console.log(age);
//printAge(); these are both out scope.

// hoisting with variables
console.log(me);
//console.log(job); creates initialization error because the variablea are declared after.
//console.log(year);

var me = 'Steven';
let job = 'Teacher';
const year = 1991;

//function
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function addDecl(a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // var makes it undefined.

//example this won't work because var essentially makes the variable undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all items deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
