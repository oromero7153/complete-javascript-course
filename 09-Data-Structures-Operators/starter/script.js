'use strict';

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
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

//////Strings/////
//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtman'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

//Padding a string//
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('jonas'.padStart(25, '-'));

const maskeCreditCard = function (number) {
  const str = number + ''; //this converts numner to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskeCreditCard(4337855463225678));
console.log(maskeCreditCard(4425659777486548));

//repeat//
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planeInLine(3);
planeInLine(5);
planeInLine(2);

/*
/////Part 2//////
const airline = 'TAP Air Portugal';

//Fix caps on  name
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'joNas'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Helllo@Jonas.io \n';

// const loweEmail = loginEmail.toLowerCase();
// const trimmedEmail = loweEmail.trim();
// console.log(trimmedEmail);

const nomalizedEmail = loginEmail.toLowerCase().trim();
console.log(nomalizedEmail);

console.log(email === nomalizedEmail);

//replace parts of strings
const priceGB = '288,97¢';
const priceUS = priceGB.replace('¢', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door. Boarding door 23';
console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the Airbus family.');
}

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed to board the plane.');
  } else {
    console.log('Welcome Aboard!');
  }
};
checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

/*
/////// Part 1 /////
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky!😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

/*
///////// maps: iterations /////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again'],
]);
console.log(question);

//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(
//   prompt(
//     'What is the best Programming Language?\n 1. C \n 2. Java \n 3. Javascipt'
//   )
// );

const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to an array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
/*
////////////////maps:fundamentals////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbonm Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close,23')
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*
/////////////////Sets///////////////////
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);

console.log(new Set());
console.log(ordersSet.size); //tells you how many objects are in a set, no repeats
console.log(ordersSet.has('pizza')); //checks if there is a specific object in the set
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread'); // adds objects to a set
ordersSet.delete('risotto'); // removes objects from a set
//ordersSet.clear(); deletes everything
console.log(ordersSet);

for (const order of ordersSet) console.log(order); // you can loop a set

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // the spread operator turns the set into an array.
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

/*
//////////////////lopping opjects; object keys, values and entries
//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property value
const values = Object.values(openingHours);
console.log(values);

///entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}

/*
//////////////////optional chaining 
if (restaurant.openingHours && restaurant.openingHours.mon)
  //console.log(restaurant.openingHours.mon.open);

  //with optional chaining
  console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'method doesnt exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// arrays
const user = [
  {
    name: 'jonas',
    email: 'hellojonas@.io',
  },
];

console.log(user[0]?.name ?? 'Users Array empty.');
if (user.length > 0) console.log(user[0]?.name);
else console.log('Users Array empty.');
/*
/////////////////looping over an array i.e. 'for of' loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log([...menu.entries()]);

/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//or assigment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullish operator ??
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// and operator &&
//rest2.owner = rest2.owner && '<Anonymous>';
//rest1.owner = rest1.owner && '<Anonymous>';

rest1.owner &&= rest1.owner && '<Anonymous>';
rest2.owner &&= rest2.owner && '<Anonymous>';

console.log(rest1);
console.log(rest2);

/*
////////////////nullish coalescing operator ?? operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//nullish values are null or undefined (0 and '' are values  with nullish coalescing operator)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
/////////////////////
console.log('----or---'); || operator 
//logical operators use any data type, return any data type, use short-circuiting
console.log(3 || 'Jonas'); // short circuiting is if the 1st operand is truthy, the other operand wont be evaluated.
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- and ---'); && operator
console.log(0 && 'Jonas'); //// short circuiting is if the 1st operand is falsy, the other operand wont be evaluated.
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null & 'Jonas');

// pratical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
///////////////////rest pattern
//rest pattern for destructuring

// spread cause it is on the right side of =
const arr = [1, 2, ...[3, 4]];

//rest cause it is on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//rest on left = spread on right... rest element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//rest pattern for functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'spinach');
restaurant.orderPizza('mushrooms');

/*
///////////////////////Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays or more

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps and sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Schmedtmann`); this wont work becuase it cannot work with values seperated by a comma.

// real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Steven' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
/////////////// Destructuring objects
restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
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

//mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/* Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//the top is the same as bottom
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main this is empty space to skip an index , , secondary] =
  restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested; //destructuring inside of destructuring
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const [[, rating], [, ratingscount]] = ratings;

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
*/
/*
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
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = ['Thiago', 'Coutinho', 'Peresic', ...players1];
console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//coding # 2
//1.
for (const [i, player] of game.scored.entries()) {
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
  console.log(`Odd of ${teamStr} is ${odd}.`);
}*/
// Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
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

//1.
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half}[HALF] ${min}: ${event}`);
}
*/
