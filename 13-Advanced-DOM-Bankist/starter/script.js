'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
//button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current (X/Y)', window.scrollX, scrollY); // gets the specific xy value based on how much scroll.
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  //the old way to get the page to scroll by clicking a button
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////
// page navigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//event delegation
//1. add event listener to common parent element.
//2. determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/*
///////////////////////////////////////
///////////////////////////////////////
// Selecting, Creating, and Deleting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //selects the first element that matches the selector
const allSections = document.querySelectorAll('.section'); // selects all the elements that matches the selector
console.log(allSections);

document.getElementById('#section--1'); // select element by the id
const allButtons = document.getElementsByTagName('button'); //selects all the buttons named with the selector
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
//.insertAdjacentHTML
const message = document.createElement('div'); // this created an element
message.classList.add('cookie-message'); //creating a class
//message.textContent='We used cookies for functionality and analytics.';
message.innerHTML =
  'We use cookies for functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message); // adds it as the first child of the header
header.append(message); //adds it as the last child of the header
//header.append(message.cloneNode(true));

//header.after(message); places the element before and after the header as a sibling
//header.before(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //closes cookie warning after clicking the ok button.
  });

//Styles
message.style.backgroundColor = '#37383D';
message.style.width = '120%';

console.log(getComputedStyle(message).color); // this shows the info you are looking, in this case the color of the message.
console.log(getComputedStyle(message).height); // this one gets the height in total pixels
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // increase the size of the cookie element.
//document.documentElement.style.setProperty('--color-primary', 'orangered');// can change the property of the entire app with setProperty('name of property', 'value')

//attributes- src, class, id, alt
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //gets the alt attribute... only works with standard properties.
console.log(logo.src); //gets the source attribute
console.log(logo.className); // for classes, it has to be .className

//set attribute
logo.alt = 'Beautiful Logo';
//get non traditional attributes
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist'); //sets the data in the attribute

console.log(logo.src); //gets the source attribute
console.log(logo.getAttribute('src')); // gets the relative version.

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attributes
console.log(logo.dataset.versionNumber);

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
*/
/*
//Types of Events and Event Handlers

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current (X/Y)', window.scrollX, scrollY); // gets the specific xy value based on how much scroll.
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  //the old way to get the page to scroll by clicking a button
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: you are reading the heading ');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: you are reading the heading ');
// };
*/
/*
//event propogation in practice... Event Propagation - movement of Events through the DOM, from child to parent. but not from parent to child.
//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // this bubbles up to the parents since they have the same event handler. does not work in the capturing phase.
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //stop propogation, not a good idea to use
  //e.stopPropagation(); // this stops the child element from changing the parent element when the event listener is triggered.
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true // will listen to capturing event. Placing the nav first, and bubbling back up to the child element.
);
*/
