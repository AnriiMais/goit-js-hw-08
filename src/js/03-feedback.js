import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));
// refs.email.addEventListener('input', onInputEmail);
// refs.message.addEventListener('input', onInputMessage);

const saveInputForm = {};

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log('saveInputForm', saveInputForm);
}
function onFormInput(e) {
  saveInputForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(saveInputForm));
}

// function onInputEmail(e) {
//   const emailIn = e.target.value;

//   saveInputForm[e.target.name] = emailIn;
//   console.log(emailIn);
// }
// function onInputMessage(e) {
//   const messageIn = e.target.value;
//   saveInputForm[e.target.name] = messageIn;
//   console.log('messageIn', messageIn);

//   //   const message = e.target.value;
// }
// console.log('storageSave', storageSave);
