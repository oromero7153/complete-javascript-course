'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //es6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // no longer need ': function'
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPaster: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
/////working with strings 3
//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Oscar Romero'.split(' '));

const [firstName, lastName] = 'Oscar Romero'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeNanme = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeNanme('jessica ann smith davis'); // should log Jessica Ann Smith Davis
capitalizeNanme('oscar romero'); // should log Oscar Romero

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // should log +++++++++++Go to gate 23!
console.log('Jonas'.padEnd(25, '+')); // should log Jonas++++++++++++++++++++
console.log(message.padStart(25, '+').padEnd(30, '+')); // should log +++++++++++Go to gate 23!+++++

const maskCreditCard = function (number) {
  const str = number + ''; // converts it to a sting as well.
  const last = str.slice(-4);
  const ccNumber = last.padStart(str.length, '*');
  console.log(ccNumber);
};

maskCreditCard(51235425); //should log ****5425
maskCreditCard(5123665423239865); //should log ************9865
maskCreditCard('372255566985547745'); //should log **************7745

//repeat
const message2 = 'Bad Weather.... All Departures are delayed... ';
console.log(message2.repeat(5)); //should log 5X of "Bad Weather.... All Departures are delayed..."

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'🛬'.repeat(n)}!`);
};
planesInLine(5); //should log there are 5 planes in line 🛬🛬🛬🛬🛬!
planesInLine(3); //should log there are 5 planes in line 🛬🛬🛬!
planesInLine(12); //should log there are 12 planes in line 🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬🛬!
/*
/////working with strings 2
const airline = 'Air Canada';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization
const passenger = 'jOnAs'; // should be Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail ? 'true' : 'false');

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

//replaces all occurences
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new Airbus Family');
}

//example
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('You are allowed on board!');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife.');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection.');

/*
/////working with strings 1
const airline = 'Air Canada';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // b and e are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    // '||' = OR
    console.log('You got the middle seat!');
  } else {
    console.log('You got Lucky!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

/*
///////// Maps: Iteration
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'try again!'],
]);
console.log(question);

//convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
}
const answer = 3;

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
///////// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'firenze, italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('catergories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*
///////// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set(''));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('Risotto');
// ordersSet.clear();   deletes everything from a set
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'manager', 'Chef', 'Waiter'];
const stuffUnique = [...new Set(staff)];
console.log(stuffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'manager', 'Chef', 'Waiter']).size
);

console.log(new Set('oscarromero').size);

/*
///////// Looping objects: Object Keys, value and entries

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

//Property entries (include keys and values)
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we are open at ${open} and close at ${close}`);
}

/*
////////////////////////
// Optional Chaining

//WITHOUT OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//checking for methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

//checking for arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'user array empty');

////////
// Enhanced Object Literals

/*
/////////////
// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log([...menu.entries()]);

/*
//////////
// Logical assignment operators ??=, ||?, &&=

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};
// OR assignment operator "||="
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator "??="
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator "&&="
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
//////////////////
// Nullish coalescing operator(??)...  
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: only nullish values will trigger the ?? nullish operator. 
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/*
//////////////
//&& "and" and ||"or" operators....   they can use any data type, return any data type, aka short-circuit evaluation.
console.log('------OR-----');
console.log(3 || 'Jonas'); // or operator returns the first truthy value, wont evaluate the next, or last value if all falsy.
console.log('' || 'Jonas');
console.log(true || 'Jonas');
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------AND-----');
//&& "and operator" returns the first falsy value, or returns the last value if all are truthy.
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
///////////////////
//Data Structures and Modern Operators

// 1. Destructuing

//spread operator because it is on the right side of the =
const arr = [1, 2, ...[3, 4]];

//rest syntax because it is on the left side of the =. it must be the last element. only one in a destructuring assignment.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 2, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'olives', 'onions', 'spinach');
restaurant.orderPizza('mushrooms');

/*
/////////////////////////
// spread operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewarr = [1, 2, ...arr]; // the "..." is the spread operator. we get the individual indeces from the array.
console.log(goodNewarr);

console.log(...goodNewarr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // creating a new array, the spread doesn't create new variables.
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables are strings, arrays, maps or sets.. but not objects.

const str = 'Jonas';
const letters = [...str, 'S.'];
console.log(letters);
console.log(str);
//console.log(`${...str} Schmedtmann`); this wont work ${} doesnt expect values seperated by a comma.

// real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPaster(...ingredients);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
/////////////////////////
// destructuring objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 32',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via Del Sole, 32',
  starterIndex: 1,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, ca: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
///////////////////////////////
// destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values... when we dont know the values in an array.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Perisic', 'Coutinho'];
console.log(players1Final);

//5.
const {
  odds: { team1, x: tie, team2 },
} = game;
console.log(team1, tie, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals was scored!`);
  console.log(players);
};

printGoals(...game.scored);

//7.

team1 < team2 && console.log(`Team 1 is more likely to win!`);
team1 > team2 && console.log(`Team 2 is more likely to win!`);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      };
      */
/*
// 1.
const goalScored = Object.entries(game.scored);
// console.log(goalScored);

for (const [i, player] of goalScored) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on average every ${time / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'; //ternary operator
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉 ('\n')
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const newWord = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(newWord);
  }
});

// underscore_case = underscoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// const camelCase = function (word) {
//   const newWord = String(word.replace('_', ' '));
//   console.log(newWord);
// };

// camelCase('first_name');
