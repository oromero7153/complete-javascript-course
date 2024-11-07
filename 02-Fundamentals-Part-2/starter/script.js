'use strict';
/*
//Strict Mode detects errors/bugs
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive')

//const interface = "Audio"; can't use certain words because they are reserved.
*/
/*
//functions
function logger() {
    console.log('My name is Oscar');
}

//calling/ running/ invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

*/
/*
//Function Declarations... function can be called before being defined
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);

//function expression... function cannot be called before being defined
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1988);

console.log(age1, age2);
*/
/*
//arrow function... they do not get a THIS keyword;
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1988, 'Oscar'));
console.log(yearsUntilRetirement(1989, 'Stephany'));
*/

/*
//nesting functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges);
    console.log(orangePieces)
    const juice = `Juice with ${applePieces} pieces apples, and ${orangePieces} pieces oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
//reviewing functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1988, 'Oscar'));
console.log(yearsUntilRetirement(1950, 'Steph'));
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner() {
    if (scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas win (${scoreKoalas} to ${scoreDolphins})`)
    } else if (scoreDolphins >= scoreKoalas * 2) {
        console.log(`Koalas win (${scoreDolphins} to ${scoreKoalas})`)
    } else {
        console.log(`No team wins...`)
    }
};
checkWinner()
*/

/*
//Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //literal array structure
console.log(friends);

//const years = new Array(1991, 1994, 2009, 2020);

console.log(friends[0]); //retrieve objects from an array. 0 is the first object in an array.
console.log(friends[2]);

console.log(friends.length); // get the number of objects in an array
console.log(friends[friends.length - 1]); // get the last object in an array, regardless of the # of items

friends[2] = 'Jay'; // change a specific index in an array
console.log(friends);

const oscar = ['Oscar', 'Romero', 2037 - 1988, 'teacher', friends];
console.log(oscar);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// basic array methods

//Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');//adds to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift('John');// adds to the front of the array
console.log(friends);

//remove elements
friends.pop(); // removes the last element in an array
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes first element in an array
console.log(friends)

//positions in an array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


/*
//coding challenge
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * .15 : bills * .2;
};

const bills = [125, 555, 44];


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
//objects

const oscarArray = [
    'Oscar',
    'Romero',
    2037 - 1988,
    'coder',
    ['Stephany', 'Josue', 'Kegan']
];

//key value arrays
const oscar = {
    firstName: 'Oscar',
    lastName: 'Romero',
    age: 2037 - 1988,
    job: 'coder',
    friends: ['Stephany', 'Josue', 'Kegan']
}

console.log(oscar)



//bracket vs dot notation
const oscar = {
    firstName: 'Oscar',
    lastName: 'Romero',
    age: 2037 - 1988,
    job: 'coder',
    friends: ['Stephany', 'Josue', 'Kegan']
};
console.log(oscar);// dot notation
console.log(oscar.age);
console.log(oscar['lastName']); //bracket notation

const nameKey = 'Name';
console.log(oscar['first' + nameKey]);
console.log(oscar['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Oscar? Choose between firstName, lastName, age, job, and friends');


if (oscar[interestedIn]) {
    console.log(oscar[interestedIn]);
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends')
};

oscar.location = 'South Bay';
oscar['twitter'] = '@elonsucks';

console.log(oscar)

//challenge
//"Oscar has three friends, and his best friend is Kegan"
console.log(`${oscar.firstName} has ${oscar.friends.length} friends and his best friend is ${oscar.friends[2]}`);
*/

/*
//object methods
const oscar = {
    firstName: 'Oscar',
    lastName: 'Romero',
    birthYear: 1988,
    job: 'coder',
    friends: ['Stephany', 'Josue', 'Kegan'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037-birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037-this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }, 
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drive's license.`
    }
};
console.log(oscar.calcAge())
console.log(oscar.age);
console.log(oscar.age);
console.log(oscar.age);

//challenge
//"Oscar is a 46 year old coder, and he has a driver's license"
 console.log(oscar.getSummary())


/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(2);
        return this.bmi
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
} else {
    console.log(`They have the same BMI`)
}
*/

/*
//Loops
//console.log('Lifting weights repitition 1')
// FOR LOOPS keeps running while condition is true.
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`)
};
*/
/*
//looping arrays
const oscar = [
    'Oscar',
    'Romero',
    2037 - 1988,
    'coder',
    ['Stephany', 'Josue', 'Kegan'],
    true,
];

const types=[];
// console.log(oscar[0])
// console.log(oscar[1])
//...
// console.log(oscar[4])

for (let i = 0; i < oscar.length; i++) {
    //reading from the oscar array
    console.log(oscar[i], typeof oscar[i])
    //filling the types of the array (string, number, etc...)
    //types[i] = typeof oscar[i];

    types.push(typeof oscar[i])
}
console.log(types)

const years = [1988, 2020, 2023, 1985];
const ages = [];

for (let i = 0; i<years.length; i ++){
    ages.push(2037-years[i]);
}
console.log(ages);

//continue and break statements
console.log('--ONLY STRINGS--')
for (let i = 0; i < oscar.length; i++) {
   if (typeof oscar[i] !== 'string') continue;

   console.log(oscar[i], typeof oscar[i])
}

console.log('--break with numbers--')
for (let i = 0; i < oscar.length; i++) {
   if (typeof oscar[i] === 'number') break;

   console.log(oscar[i], typeof oscar[i])
}
*/
/*
//looping backwards and loop in a loop
const oscar = [
    'Oscar',
    'Romero',
    1988,
    'coder',
    ['Stephany', 'Josue', 'Kegan'],
    true,
];

//looping backwards from index 4 to 0
for (let i = oscar.length - 1; i >= 0; i--) {
    console.log(i, oscar[i]);
};

//loop in a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Starting exercise--- ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercsise ${exercise}: lifting weights repitition ${rep}`);
    }
}
*/
/*
//while loop used when you don't know how many iterations youre going to have
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`)
// };

let rep = 1;
while (rep <= 10) {
    //console.log(`Lifting weights repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice)

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}
console.log(calcAverage(totals))
console.log(calcAverage(tips))
console.log(calcAverage(bills))
