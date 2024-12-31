'use strict';

const budget = Object.freeze([
  // change the vars to const and let
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); // object.freeze to make the object immutable
// const limit = spendingLimits[user] ? spendingLimits[user] : 0; // Ternary operator
// const limit = spendingLimits?.[user] ?? 0; // Optional chaining with the nullish coalescing operator.

// Pure function
const getLimit = (limits, user) => limits?.[user] ?? 0; // refactor code.Optional chaining with the nullish coalescing operator.

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  110,
  'movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });

  // for (const entry of newBudget3)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure function because it creates a side effect with the console.log
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= +-bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, ''); you can also use reduce to create the string.

  console.log(bigExpenses);

  //   let output = '';
  //   for (const entry of budget)
  //     output +=
  //       entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

  //   output = output.slice(0, -2); // Remove last '/ '
  //   console.log(output);
};

logBigExpenses(finalBudget, 500);
