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
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

// event handlers
let currentAccount;

//Login Event Handler
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input field;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

// Transfer Event Handler
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

// loan event handler
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //some() method checks if the balane is greater than 10% of the requested loan.

    //add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// Delete event handler with findIndex() method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //delete user
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// sorting event handler
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
///////////////////////////////////////
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
///////////////////////////////////////
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
/*
///////////////////////////////////////
////  The map Method creates an array based on original array that is passed through a condition. 

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

//const movementsUsd = movements.map(mov => mov * euroToUsd); ** THIS ALSO WORKS

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * euroToUsd);

console.log(movementsUsdFor);

const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDesc);
*/
/*
///////////////////////////////////////
////  The filter Method filters elements in the original array that satisfy a condition. 

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// for loop version
const depositsfor = [];
for (const mov of movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
/*
///////////////////////////////////////
////  The reduce Method boils down the elements of an array to one value, using an accumalator (acc).

//accumalator --> snowball effect
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // 0 is the initial value. changing this would start the accumalator at that set value.
console.log(balance);

// the for of version
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// get the maximum value of the movements array
const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(max);

/* 
///////////////////////////////////
// Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (arr) {
  const humanAges = arr.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAges);

  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  const avgAge =
    adults.reduce(function (acc, age) {
      return acc + age;
    }, 0) / adults.length;
  console.log(avgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log('--- Second Set of data ---');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/*
///////////////////////////////////////
////  The magic of chaining Methods

const euroToUsd = 1.1;
console.log(movements);

// Pipeline
const totalDepositUSD = Math.trunc(
  movements
    .filter(mov => mov > 0)
    // .map(mov => mov * euroToUsd)
    .map((mov, i, arr) => {
      //console.log(arr);
      return mov * euroToUsd;
    })
    .reduce((acc, mov) => acc + mov, 0)
);

console.log(totalDepositUSD);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log('--- Second Set of data ---');
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
////  The find Method
const firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
/*
////  The some and every Method
console.log(movements);
console.log(movements.includes(-130));

//.some() method tests for a condition

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//.every() method similar to some method, but only returns true if every element passes the test from the callback function

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/*
///////////////////////////////////////
////  The flat and flatMap Method

//Flat method only goes one layer deep in the array.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //console displays all the numbers in one array, non-nested.

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //the '2' goes in another layer deep.

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallChain);

//flatMap combines flat and map methods, better for performance. It only goes one layer deep, if you need to go deeper into the array, the use the .flat() method.

const overallChain2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallChain2);
*/

/*
///////////////////////////////////////
//Sorting Arrays
const owners = ['Jonas', 'Zach', 'Martha', 'Adam'];
console.log(owners.sort()); //.sort() defaults the array into alphabetical order, but mutates the original array. does not work with mixed arrays i.e. strings and numbers

// .sort() with numbers
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
//console.log(movements.sort());// defaults the array into numerical order, by the first number regardless of the amount. i.e. [-130, -400, -650, 1300, 200, 3000, 450, 70]

//if we use in the return < 0, the we will get A, B (keep order)
//if we use in the return > 0, the we will get B, A (switch order)

//ascending
// movements.sort((a, b) => {
//   //a is the current value, and b is the next value
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

//descending
// movements.sort((a, b) => {
//   //a is the current value, and b is the next value
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);
*/
///////////////////////////////////////
//findLast and findLastIndex
/*
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

//'Your latest large movement was x moments ago.'
const latestLargestMovementIndex = movements.findLastIndex(mov => {
  return mov > 1000;
});
console.log(latestLargestMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargestMovementIndex - 1
  } moments ago.`
);
*/
/*
///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/
/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

//1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
);
console.log(dogBothActivities);

//3.
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

//4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

//5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activities => activities !== 'swimming')
  ),
];

console.log(swimmingAdjacent);

//6.
console.log(breeds.every(breed => breed.averageWeight > 10)); // every is used when all need to meet the condition.

//7.
console.log(breeds.some(breed => breed.activities.length >= 3)); //some is used when any element meets the condition.

// bonus
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(heaviestFetchBreed);
console.log(fetchWeights);
*/
/*
///////////////////////////////
//Array grouping

console.log(movements);

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

//const groupedAccounts = Object.groupBy(accounts, account => account.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);

console.log(groupedAccounts);
*/
/*
///////////////////////////////////////
//More Ways of Creating and Filling Arrays

// the old way
const arr = [1, 2, 2, 3, 4];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // this creates an array with 7 empty elements console logs '(7) [empty × 7]' not useful;
console.log(x);

// fill() method
//empty arrays
x.fill(1, 3, 5); // this fills this array with this element, mutates the array
console.log(x);
// the 1 is the element that will go into the array, the 3 is the begin parameter, the 5 is the end parameter.

// arrays that have elements in it.
arr.fill(23, 2, 6);
console.log(arr);

//array.from()
const y = Array.from({ length: 7 }, () => 1); // creates an array similar to line 814
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1); // console logs [1, 2, 3, 4, 5, 6, 7], cur can also be an _.
console.log(z);

//convert node list into an array

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    //we used Array.from the query selector which is a node list
    document.querySelectorAll('.movements__value'),
    // we used a mapping like function to convert initial array into the array of numbers that we intended.
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/
/*
///////////////////////////////////////
//Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

// toReversed() method
console.log(movements);
//const reversedMovements = movements.reverse();
//console.log(reversedMovements);
console.log(movements); // the original has been mutated by the destructive reverse() method. slice() would create shallow copy.

const nonDestructiveMethod = movements.toReversed(); //toReversed() reverses the array without mutating it
console.log(nonDestructiveMethod);
console.log(movements);

//toSorted() method, doesnt mutate the orignal array, sort() would mutate
//toSpliced() method, doesnt mutate the orignal array, splice() would mutate

// with() method, updates the array without mutating the original array
//movements[1] = 2000;
const newMovements = movements.with(1, 2000);// 1 is the index parameter, parameter is the value. 
console.log(newMovements);

console.log(movements);
*/
/*
///////////////////////////////////////
//array method practice
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements) //take all the movements and put into an array(not an array of arrays)
  .filter(mov => mov > 0) //filtered out all the positive withdrawals
  .reduce((sum, cur) => sum + cur, 0); // added them all together.

console.log(bankDepositSum);

//2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

//prefixed ++ operator
let a = 10; //++ in front actual call the ++ operator to do its job of adding 1
console.log(++a);

//3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4
//this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a nice LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
///////////////////////////////////////
// Coding Challenge #5

/* 
- Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in the grams of food, and the weight needs to be in KG).
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.  recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log(dogs);

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

//2.

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eats too much ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }.`
);

//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' ')}'s dogs are eating too much`);
console.log(`${ownersEatTooLittle.join(' ')}'s dogs are eating too little`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6.
console.log(
  dogs.every(
    dog =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood < dog.recommendedFood * 0.9
  )
);

//7.
const ownersEatOk = dogs
  .filter(
    dog =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood < dog.recommendedFood * 0.9
  )
  .flatMap(dog => dog.owners);
console.log(ownersEatOk);

//8.

const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recommendedFood) {
    return 'Too Much';
  } else if (dog.curFood < dog.recommendedFood) {
    return 'Too Little';
  } else {
    return 'Exact';
  }
});

console.log(dogsGroupedByPortion);

//9.
const dogsGroupedByOnwers = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`
);
console.log(dogsGroupedByOnwers);

// 10.
const dogsSorted = dogs.toSorted(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(dogsSorted);
