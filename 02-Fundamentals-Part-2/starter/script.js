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
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23)
*/

/*
//Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1988);

console.log(age1, age2);
*/

/*
//arrow function
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
    const orangePieces = cutFruitPieces(oranges)
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