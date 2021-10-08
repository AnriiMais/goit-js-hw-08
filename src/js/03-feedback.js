import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};
refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

if (localStorage.getItem('feedback-form-state')) {
  const saveDefaultForm = JSON.parse(localStorage.getItem('feedback-form-state'));

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
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
function onFormInput(e) {
  refs.submitBtn.disabled = true;
  const obj = {
    message: refs.feedbackForm.elements.message.value,
    email: refs.feedbackForm.elements.email.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  if (obj.message && obj.email) refs.submitBtn.disabled = false;
}
