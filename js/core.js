// the main js file
console.log('JS connected succesfuly')

// ChebuCraft pop-up context menu
const openPopUp = document.getElementById('pop-up-open')
const closePopUp = document.getElementById('pop-up-close')
const popUp = document.getElementById('pop-up')

openPopUp.addEventListener('click', function(e) {
  e.preventDefault()
  popUp.classList.add('active')
})

closePopUp.addEventListener('click', function() {
  popUp.classList.remove('active')
})