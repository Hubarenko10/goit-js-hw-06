const inputText = document.querySelector('#text');
const inputRange = document.querySelector("#font-size-control");

inputRange.addEventListener('input', (e) => {
    const size = inputRange.value;

    inputText.style.fontSize = size + "px";
});




