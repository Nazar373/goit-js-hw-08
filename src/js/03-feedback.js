import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input')
};
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea()

function onFormInput(evt) {
  // console.log(evt.target.value)
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  // const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // localStorage.setItem(STORAGE_KEY, JSON.stringify({...formData, [evt.target.name]: evt.target.value}));
  JSON.parse(JSON.stringify(formData));
}

function onFormSubmit(evt) {
  if(refs.textarea.value === '' || refs.input.value === ''){
    return alert('please fill in the blank')
   } else {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
   }
};

function populateTextarea() {
  const savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(savedMassage){
    refs.textarea.value = savedMassage.message || "";
    refs.input.value = savedMassage.email || "";
  }
}