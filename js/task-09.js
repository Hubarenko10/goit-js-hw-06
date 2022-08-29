function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorText = document.querySelector('.color')


changeButton.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
})
