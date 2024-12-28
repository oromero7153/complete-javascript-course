'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal
// https://countries-api-836d.onrender.com/countries/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////
//video 258 Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('canada');
getCountryData('vietnam');
getCountryData('brazil');
*/
///////////////////////////////////////
//video 260 Welcome to Callback hell

// const renderCountry = function (data, className) {
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
/*
const getCountryAndNeighbor = function (country) {
  //ajax call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1;
    renderCountry(data);

    //get neighbor country
    const [neighbor] = data.borders;

    if (!neighbor) return;

    //ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

//getCountryAndNeighbor('germany');
getCountryAndNeighbor('usa');
*/
///////////////////////////////////////
// video 261. Promises and the Fetch API
//the old way of getting http request.
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//the fetch gets the promise that is stored in the request variable
// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // throw keyword immediately terminates the function like return. Runs if there is an error

    return response.json();
  });
};

///////////////////////////////////////
//video 262. Consuming Promises

// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);
//       //video 265. Throwing errors manually
//       if (!response.ok)
//         throw new Error(`Country Not Found! ${response.status}`); // throw keyword immediately terminates the function like return. Runs if there is an error

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       //video 263. Chaining Promises
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       //country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💣`);
//       renderError(`Something went wrong ☠️ ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// //video 264. Handling Rejected Promises
// btn.addEventListener('click', function () {
//   getCountryData('papua new guinea');
// });
/*
const getCountryData = function (country) {
  //country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country Not Found'
  )
    .then(function (data) {
      renderCountry(data[0]);
      //video 263. Chaining Promises
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No Neighboring Countries');

      if (!neighbour) return;
      //country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err}💣`);
      renderError(`Something went wrong ☠️ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
//video 264. Handling Rejected Promises
btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/
//then method is called when the promise is fulfilled, catch is called when the promise is rejected and finally is  not always useful, but can be called for something that always needs to happen like a loading spinner. These only work on promise (aka fetch)
// getCountryData('adadsfsfasd');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with Geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}.`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message}☠️`));
};

whereAmI(52.508, 13.381);
whereAmI(43.660684, -79.374767);
whereAmI(-33.933, 18.474);

//////////////////////////////////////////
// video 268, the event loop in practice

console.log('Test Start'); //synchronous code
setTimeout(() => console.log('O sec timer'), 0); //this goes into call back queue, which executes after the microtask queue.
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); //this will execute first because it is in the microtasks queue, which goes before the call back queue

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log('Test End'); //synchronous code


//////////////////////////////////////////
// video 269, building a simple promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!!🫡');
    } else {
      reject(new Error('You Lose! 🫵'));
    }
  }, 2000);
});

//consuming the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 secs');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 sec'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem')).catch(x => console.error(x));


//////////////////////////////////////////
// video 270. Promisifying the Geolocation API

console.log('getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with Geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}.`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message}☠️`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2loaded');
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.log(err));

///////////////////////////////////////
// video 272. Consuming Promises with Async/Await

// fetch(
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ).then(res => console.log(res)); fetch and .then are the same as async/await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // video 273 Error Handling With try...catch
  try {
    //getting geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    let dataGeo = await resGeo.json();

    dataGeo.countryName = 'usa';

    //country data
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`
    );

    if (!resGeo.ok) throw new Error('Problem getting counrty');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`💥${err}`);
    renderError(`💥 ${err.message}`);

    //reject promise async function
    throw err;
  }
};

console.log('1: will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log('3: finished getting location');
})();

///////////////////////////////////////
//video 275. Running Promises in Parallel... use Promise.all()

const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://countries-api-836d.onrender.com/countries/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);
    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3countries('portugal', 'canada', 'tanzania');

///////////////////////////////////////
//video 276. Other Promise Combinators: race, allSettled and any

//Promise.race()... we get one array, the one that takes the least to load. it is literally a race. useful to stop never ending or really long arrays

(async function name() {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

//Promise.allSettled()
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//Promise.any() ignores rejected promises, unless all promises are rejected.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let img;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.log(err));
// part 1
const loadNPause = async function () {
  try {
    //load image 1
    img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //load image 2
    img = await createImage('img/img-2.jpg');
    console.log('image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
//loadNPause();

//part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img)); //this creates an array of promises
    console.log(imgs);

    const imgsEl = await Promise.all(imgs); // this handles the array of promises, use promise.all to get the array of the elements.
    imgsEl.forEach(img => img.classList.add('parallel'));
    console.log(imgsEl);
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
