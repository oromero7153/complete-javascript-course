// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//- what is temperature amplitude- difference between lowest and highest temp
//- how to compute max and min temperatures?
//- what does a sensor error? and what to do?

// 2) Breaking up into sub-problems
//- how to ignore errors
//- find max value in temp array
//- find min value in temp array
//- subtract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//problem 2 :
// function should receive 2 arrays of temp.

// 1) Understanding the problem
//- with 2 arrays, should we implement functionality twice? no just merge the arrays

// 2) Breaking up into sub-problems
//- how to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) Fix
    //value: Number(prompt('Degrees, celsius:')),
    value: 10,
  };
  //B) find bug
  // console.log(measurement.value);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) identify
console.log(measureKelvin());

//using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
*/
/* ----------- */
/*
Given an array of forecasted temperatures, the thermometer displays a string with these temperatures. 

example: [17, 21, 23] will print "... 17C in 1 days.. 21C in 2 days... 23C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. 

use the problem-solving framework: understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// understand the problem
// 1.  we are trying to log the temps in the array to the corresponding day i.e. [0] in 1 day, [1] in 2 days... etc.
// 2. the days are index +1

// breaking up into subproblems
// 1. turn array into string
//
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
