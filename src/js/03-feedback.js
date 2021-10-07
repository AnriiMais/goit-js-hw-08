import throttle from 'lodash.throttle';
console.log("document.querySelector('.feedback-form')", document.querySelector('.feedback-form'));
const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};
refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));
if (localStorage.getItem('feedback-form-state')) {
  const saveDefaultForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('SaveDefaultForm', saveDefaultForm);
  if (saveDefaultForm.email) {
    refs.email.value = saveDefaultForm.email;
  }
  if (saveDefaultForm.message) {
    refs.message.value = saveDefaultForm.message;
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function onFormInput(e) {
  const obj = {
    message: refs.feedbackForm.elements.message.value,
    email: refs.feedbackForm.elements.email.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}
