let counterValue = 0;
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

incrementValue.addEventListener("click", () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
});
decrementValue.addEventListener('click', (() => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}));
