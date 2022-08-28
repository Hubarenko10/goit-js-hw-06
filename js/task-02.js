const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('ul');

  let ingredientsList = [];

  for (const ingredient of ingredients) {

    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item');

    ingredientsList.push(liEl);

  }

ulEl.append(...ingredientsList);