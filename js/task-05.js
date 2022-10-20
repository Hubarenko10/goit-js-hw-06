const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//     output.textContent = event.currentTarget.value;
//     if (output.textContent === '') {
//         output.textContent = 'Anonymous';
//     }
// });

const input = (e) => {
output.textContent = e.currentTarget.value;
output.textContent.trim() === '' ? output.textContent = 'Anonymous' : e.currentTarget.value;
};

textInput.addEventListener("input", input);


