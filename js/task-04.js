let counterValue = 0;
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
}

const decrement = () =>{
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
}
incrementValue.addEventListener("click", increment);
decrementValue.addEventListener('click', decrement);