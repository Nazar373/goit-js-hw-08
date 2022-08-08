import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea')
};
const formData = {};

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea()

function onFormInput(evt) {
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  JSON.parse(JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  if( !refs.form.value){
   return alert('asgkma')
  } else {
  console.log(formData) 
  }
};

function onTextareaInput(evt){
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
};

function populateTextarea() {
  const savedMassage = localStorage.getItem(STORAGE_KEY)
  if(savedMassage){
    console.log(STORAGE_KEY)
  }
}