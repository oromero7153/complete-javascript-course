'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); //.hidden is not necessary. The Period is not needed for this method.
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); //.hidden is not necessary. The Period is not needed for this method.
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); // closemModal() would execute the function right away, so we use closModal with no parentheses
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //this means if the modal does not (!)contain the hidden class.
    closeModal(); //function needs to be called here
  }
});
