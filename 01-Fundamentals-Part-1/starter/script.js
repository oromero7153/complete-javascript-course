/*


let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);
/*
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

let markMass = 78;
let markHeight = 1.69;
let BMIMark = markMass / markHeight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let BMIJohn = johnMass / (johnHeight * johnHeight);

console.log(BMIMark, BMIJohn);

let markerHigherBMI = (BMIMark >= BMIJohn);
console.log(markerHigherBMI);
*/
/*
////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 16;

if (age >= 18) {
    console.log("Sarah can take her driver's test 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough, she needs to wait ${yearsLeft} years.`)
}

const birthYear = 1988;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof (NaN));

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old.'); // coerces number into a string
console.log('23' - '10' - 3); //coerces strings into numbers
console.log('23' / '2'); //coerces strings into numbers

let n = '1' + 1; //+ operator converts '11' string
n = n - 1; // here, the - operator converts to a number
console.log(n);


//truthy and falsy... 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Oscar'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 50;
if (money) {
    console.log("Don't Spend it all")
} else {
    console.log("you should get a job!")
};

let height = 66;
if (height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is Undefined')
}


//equality operators

const age = 18;  //=== strict equality, no type coercion; == loose equality, type coercion;
if (age === 18) console.log('You just became an adult! (strict)');

if (age == 18) console.log('You just became an adult! (loose)');

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite)

if (favorite === 23) {
    console.log('Cool! 23 is cool!')
} else if (favorite === 7) {
    console.log('7 is cool!')
} else {
    console.log('number is neither 23 or 7')
}

if (favorite !== 23) {
    console.log('Why not 23?')
} // ! is the not operator 

//logical operators
const hasDriversLicense = true; //a
const hasGoodVision = true; //b
// && is the and operator, and || is the or operator, ! is the not operator
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

 if (shouldDrive) {
     console.log('Sarah is able to drive')
 } else {
     console.log('Someone else should drive...')
}

const isTired = true; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive...')
}


//Switch statements
const day = String(prompt('What day is it?'));

switch (day) {
    case 'monday': // day === 'monday'
        console.log('plan my course structutre');
        console.log('go to coding meet up');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    default:
        console.log('Not a valid day')
};

// the if else version of the switch statement
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//statements and expressions
//expression produce a value
3 + 4
1991
true && false && !false;
//statement
if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old`)
*/


//ternary operator ? is the if block
const age = 23
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';

console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
};
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

const bill = 275;
const tip = bill <= 300 && bill>=50 ?  bill * 0.15 :
bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



