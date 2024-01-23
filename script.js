'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/////////

document.addEventListener('keydown', function(e) {
  console.log(e.key);

  if(e.key === 'Escape') { // if the press key is escape 
    // if(modal.classList.contains('hidden')) // if the modal contains hidden class it means that the modal is currently hidden -> and in this condition we don't want to do anything 
    
    if(!modal.classList.contains('hidden')) { // ! -> not
      closeModal(); // here we do need to call this function because when thus function here is executing something needs to happen and it is basically the code in the function 
    } 

    // we only want to close the modal if it does not contain the hidden class
  };
}) 



// thsi event will happen as we hit any key on the keyboard

// we are basically listening for events everywhere, so no matter where they happen on the page they will always trigger the event handler that we are going to specify here 

// keyup -> this is only happens when we lift or finger off the keyboard basially or off the key 
// keypress -> is fired continously as we keep our finger on a certain key 
// keydown -> is fired as soon as we just press down the key 

// we don't call the function here we only define it here
// call function when a key down event happens and when you do so pass in the event object as an argument
// event object = (e) = event

