function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorText = document.querySelector('.color')


changeButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
})
