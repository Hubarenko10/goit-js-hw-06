const form = document.querySelector('.login-form');
const emailInput = document.querySelector('input[type=email]');
const passwordInput = document.querySelector('input[type=password]')
// console.log(emailInput);
// console.log(passwordInput);
form.addEventListener('submit', (event) => {
    event.preventDefault();
      const {
    elements: {email, password}
      } = event.currentTarget;
    
    if(emailInput.value === '' || passwordInput.value === '') {
      alert("EMPTY FIELD!!!");
      return;
    }
    const data = {
      Email: email.value,
      Password: password.value
    }
    console.log(data);
    event.currentTarget.reset();
})
