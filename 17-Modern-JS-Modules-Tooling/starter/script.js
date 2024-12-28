/////////////// video 282. Exporting and Importing in ES6 Modules
// Importing module
// import './shopppingCart.js';// import statements at the top

// importing the named export
// import { addToCart, totalPrice as price, tq } from './shopppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('importing module');

// import * as ShoppingCart from './shopppingCart.js'; //* is used to import everything
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//importing the default export.
import add /*, { cart } this is a no-no*/ from './shopppingCart.js';
// console.log(cart);
add('carrot', 6);
add('bread', 5);
add('pizza', 3);

//console.log(cart);

/////////////// video 283. Top-Level await (ES2022) outside of an async function
// blocks the execution of the entire module, so synchronous code wont run before the await.

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body }; // the .at(-1) gets the last element of the array.
};
const lastPost = getLastPost();
console.log(lastPost);

//Not clean... use top level await.
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/////////////// video 284. The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQty = 23;

  const addToCart = function (product, qty) {
    cart.push({ product, qty });
    console.log(`${qty} ${product} added to the cart.`);
  };

  const orderStock = function (product, qty) {
    cart.push({ product, qty });
    console.log(`${qty} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQty,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 3);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


/////////////// video 285. CommonJS Modules

// Export in NODE.js
export.addToCart = function (product, qty) {
    cart.push({ product, qty });
    console.log(`${qty} ${product} added to the cart.`);
  };
//IMport in node.js
const{addToCart}=require('./shopppingCart.js');
*/
