const inputFind = document.querySelector('#validation-input');
inputFind.addEventListener('focusout', event => {
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);
    if (inputFind.value.length === inputLength) {
        inputFind.classList.add('valid');
        inputFind.classList.remove('invalid');
    }
    else {
        inputFind.classList.remove('valid');
        inputFind.classList.add('invalid');
    }

})
