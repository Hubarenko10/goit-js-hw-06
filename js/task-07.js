const inputText = document.querySelector('#text');
const inputRange = document.querySelector("#font-size-control");
text.style.fontSize = '56px';
inputRange.addEventListener('input', (e) => {
    const size = inputRange.value;
    inputText.style.fontSize = size + "px";
});




