import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const email = formRef[name = 'email']
const message = formRef[name = 'message']
const KEY_SUBMIT = 'feedback-form-state';

formRef.addEventListener('submit', sendForm);
formRef.addEventListener('input', throttle(inputForm, 500));

function inputForm() {
    const objektResult = { email: email.value, message: message.value };
    localStorage.setItem(KEY_SUBMIT, JSON.stringify(objektResult));
}

function sendForm(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_SUBMIT)));
    localStorage.removeItem(KEY_SUBMIT);
}

updateInput();
function updateInput() {
    const objLocalS = JSON.parse(localStorage.getItem(KEY_SUBMIT));

   try {
      email.value = objLocalS.email;
      message.value = objLocalS.message;
    } catch {
      email.value = '';
      message.value = '';
    }
}





