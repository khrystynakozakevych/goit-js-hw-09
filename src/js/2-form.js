'use strict';
let formData = {
  email: '',
  message: '',
};

// Gettin the form.feedback-form
const form = document.querySelector('.feedback-form');

// local storage key
const localStorageKey = 'feedback-form-state';

// loading the data from local storage
formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', evt => {
  const fieldName = evt.target.name;
  const fieldValue = evt.target.value;
  formData[fieldName] = fieldValue.trim(); //saving the data in formData without the space
  localStorage.setItem(localStorageKey, JSON.stringify(formData)); //saving the data in local storage
});

form.addEventListener('submit', evt => {
  evt.preventDefault(); // preventing default reload

  if (!formData.email || !formData.message) {
    //cheking if all field are filled
    alert('Fill please all fields'); //in not, send the allert
    return;
  }

  console.log(formData);

  // cleaning the local storage and resetting the form
  localStorage.removeItem(localStorageKey);
  form.reset();

  // resetting formData
  formData = { email: '', message: '' };
});
