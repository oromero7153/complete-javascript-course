'use strict';

/*
////////////// Creating default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 coding
  //numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
*/
/*
////////////// Passing arguments, value vs reference
const flight = 'LH234';
const oscar = {
  name: 'Oscar Romero',
  passport: 12254,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + ' ' + passenger.name;

  if (passenger.passport === 12254) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};
// checkIn(flight, oscar);
// console.log(flight);
// console.log(oscar);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(oscar);
checkIn(flight, oscar);
*/
/*
//////////////First-class and high-order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function becuase it takes in other funcions aka call back functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
*/
/*
/////////// Functions that return functions
const greet = function (greeting) {
  //1.
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas'); //greeterHey becomes the 1. function in greet... returns Hey Jonas
greeterHey('Steven'); //returns Hey Steven

greet('Hello')('Steven'); //returns Hello Steven
//----- arrow function ------
const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
const greeterHeyArr = greet('Hey');
greeterHeyArr('Jonas'); // returns Hey Jonas
greeterHeyArr('Steven'); // returns Hey Steven

greetArr('Hello')('Steven'); //returns Hello Steven
*/

/////////// The call and apply methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Oscar Romero');
lufthansa.book(663, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//call method
const book = lufthansa.book;
//does not work
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'sarah williams'); // the call method will use the book function and use the first parameter of 'eurowings'to push the data to the eurowings object. it replaces the 'this' keyword pointed to 'eurowings'. Use the same property names.
console.log(eurowings);

book.call(lufthansa, 239, 'sarah williams');

//apply method allows you to use an array as a parameter. no longer used since we can use call() with the spread operator.
const flightData = [583, 'George Copper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// same as
book.call(eurowings, ...flightData);
console.log(eurowings);

/////////// The bind method rewrites a new function setting the this keyword to provided value
//book.call(lufthansa, 239, 'sarah williams');

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEw(23, 'Steven Romero');
bookLH(452, 'Oscar Romero');
// bind can also preset arguments... this example sets the flightNum to 23
const bookEw23 = book.bind(eurowings, 23);
bookEw23('Jimmy McNulty');

//bind can work with objects with event listeners.
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application- aka preset parameters

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //this keyword should be first so we use null, it removes the need of a this keyword. order arguments is important.
console.log(addVAT(100));
console.log(addVAT(23));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: \n to create new line. 
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  //this generates [0,0,0,0]. More in the next section.
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)\n`
      )
    );
    if (answer >= 0 && answer < this.answers.length) {
      poll.answers[answer]++;
    } else {
      console.log('follow the rules dickhead!');
    }
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// const displayResults = function () {
//   console.log(
//     `Poll results are ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]}, ${poll.answers[3]}.`
//   );
// };
// displayResults();
