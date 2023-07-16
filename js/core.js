// the main js file
console.log('JS connected succesfuly');

//TODO: 

// ChebuCraft modal window
const chebucraftModal = document.querySelector('.chebucraft-modal');
const chebucraftOverlay = document.querySelector('.chebucraft-overlay');
const chebucraftOpenModalBtn = document.querySelector('.chebucraft-btn-open');
const chebucraftCloseModalBtn = document.querySelector('.chebucraft-btn-close');

// close modal function
function chebucraftCloseModal() {
  chebucraftModal.classList.add('hidden');
  chebucraftOverlay.classList.add('hidden');
};

// close the modal when the close button and overlay is clicked
chebucraftCloseModalBtn.addEventListener('click', chebucraftCloseModal);

// close modal when the Esc key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !chebucraftModal.classList.contains('hidden')) {
    chebucraftCloseModal();
  }
});

// open modal function
function chebucraftOpenModal() {
  chebucraftModal.classList.remove('hidden');
  chebucraftOverlay.classList.remove('hidden');
};

// open modal event
chebucraftOpenModalBtn.addEventListener('click', chebucraftOpenModal);



//! ======================================================================




// QR Code modal window
const qrcodeModal = document.querySelector('.qrcode-modal');
const qrcodeOverlay = document.querySelector('.qrcode-overlay');
const qrcodeOpenModalBtn = document.querySelector('.qrcode-btn-open');
const qrcodeCloseModalBtn = document.querySelector('.qrcode-btn-close');

// close modal function
function qrcodeCloseModal() {
  qrcodeModal.classList.add('hidden');
  qrcodeOverlay.classList.add('hidden');
};

// close the modal when the close button and overlay is clicked
qrcodeCloseModalBtn.addEventListener('click', qrcodeCloseModal);

// close modal when the Esc key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !qrcodeModal.classList.contains('hidden')) {
    qrcodeCloseModal();
  }
});

// open modal function
function qrcodeOpenModal() {
  qrcodeModal.classList.remove('hidden');
  qrcodeOverlay.classList.remove('hidden');
};

// open modal event
qrcodeOpenModalBtn.addEventListener('click', qrcodeOpenModal);
