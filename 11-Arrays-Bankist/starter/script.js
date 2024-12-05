'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovement(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
//// Array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
//does not mutate
console.log(arr.slice(2)); // gets everything after index 1
console.log(arr.slice(2, 4)); // gets everything after index 1 and everything before index 3
console.log(arr.slice(-2)); // gets the last 2 indexes
console.log(arr.slice(-1)); // gets the last index
console.log(arr.slice()); //creates a shallow copy similar to the spread operator.

//splice
//console.log(arr.splice(2)); //same as slice(2), but changes the original array. Deletes index 2,3,4. New array only has index 0 and 1.. mutates the original array.
arr.splice(-1); //removes the last index
console.log(arr);
arr.splice(1, 2); // the first value in splice is start index, the second number is the elements deleted.
console.log(arr); // returns A and D

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // it mutates the original array.
console.log(arr2);

//concat
//does not mutate the array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same if you use the spread operator

//join
console.log(letters.join(' - '));

/*
//// The new AT Method
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));
///////// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Oscar'.at(0));
console.log('Oscar'.at(-1));
*/

/*
//// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`); // Math.abs() returns the absolute value... no negs.
  }
}

// forEach() is a high order function. there are no break statements

console.log('------- forEach() -----');
movements.forEach(function (mov, i, arr) {
  // first paramenter needs to be the current element, sceond current index, third is the entire array.
  if (mov > 0) {
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`); // Math.abs() returns the absolute value... no symbols.
  }
});
*/
/*
////  forEach with maps and sets.

const currencies = new Map([
  ['USD', 'United States dollar'], //USD is the key, and 'United States Dollar' is the value
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

//map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  // a set doesnt have keys so it just duplicates value as the key parameter. 
  console.log(`${key}: ${value}`);
});
*/

///////////////////////////////////
// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


// juliaData = [3, 5, 2, 12, 7];
// kateData = [4, 1, 15, 8, 3];

const checkDogs = (arr1, arr2) => {
  const correctArr1 = arr1.slice(1, -2);
  // would have worked as well
  // const correctArr1 = arr1.slice();
  // correctArr1.splice(0,1);
  // correctArr1.splice(-2);

  console.log(correctArr1);

  const combinedData = correctArr1.concat(arr2);
  console.log(combinedData);

  combinedData.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('---second set of data---');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
