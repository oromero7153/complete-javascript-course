// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
//"Given an array of temperatures of one day,calculate the temperature amplitude.
//Keep in mind that sometimes there might be a sensor error."

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//- what is temperature amplitude- difference between lowest and highest temp
//- how to compute max and min temperatures?
//- what does a sensor error? and what to do?
// 2) Breaking up into sub-problems
//- how to ignore sensor errors
//- find max value in temp array
//- find min value in temp array
//- subtract min from max(amplitude) and return it
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
/*
//problem 2:
//function sshould receive 2 arrays of temps

//1) understanding the problem
// we dont have to implement the function twice, just merge the two arrays.

//2) breaking up into smaller problems
//  merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 12], [12, 5, 18]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) fix the bug 
    value: Number(prompt('Degree celsius:')),
  };

  //b) find the bug
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//a) identify the bug
console.log(measureKelvin());
*/

//////////////
// Coding Challenge #1
/*
given an array of forecasted temperatures, the thermometer displays a string with these temperatures. 

example [17, 21,23] will print "... 17ºC in 1 days... 21ºC in 2 days... 23ºC in 3 days..."

create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

use the problem solving framework: Understand the problem and break it up in to subproblems. 

TEST Data 1: [17, 21, 23]
TEST Data 2: [12, 5, -5, 0, 4]
*/

//step 1 create a function

//1) Understanding the problem
// - put the array into a string, seperated by ...
// - the amount of days is the index +1

// 2) Breaking up into sub-problems
// - transform array into string
// - transform each element into string with ºC
// - string needs to contain day: index + 1
// -  add "..." to the begining and end of each string
/*
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days... `;
  }
  console.log('...' + str);
};
printForecast(temp1);
printForecast(temp2);
*/
const largeNum = [13252, 144121, 185, 1128, 457, 33, 122, 33, 45544];

const findLrgNum = function (arr) {
  let max = arr[0];
  let min = arr[0];
  let str = '';
  let sorted = arr.sort((a, b) => a - b); // this formula compares two elements,
  //if the output is negative, then the number is smaller. i.e. 185-13252 makes 185 smaller.
  //If the output is positive, then the number is larger. i.e. 13252-185 makes 13252 larger.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    str =
      str +
      `${arr[i]} is a number and it is in the number ${
        i + 1
      } position of the array...`;
  }
  console.log(max, min);
  console.log('...' + str);
  console.log(sorted);
};

findLrgNum(largeNum);
