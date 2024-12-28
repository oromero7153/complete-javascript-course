/////////////// video 282. Exporting and Importing in ES6 Modules
// Exporting module
console.log('exporting module');

//blocking code... more from video 283
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finished fetching');

const shippingCost = 10;
export const cart = [];

//Named Export... need to be top level code
export const addToCart = function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} added to the cart.`);
};

const totalPrice = 237;
const totalQty = 23;

export { totalPrice, totalQty as tq };

//default exports
export default function (product, qty) {
  cart.push({ product, qty });
  console.log(`${qty} ${product} added to the cart.`);
}
