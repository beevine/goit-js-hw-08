const throttle = require('lodash.throttle');
const formRef = document.querySelector('form');
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

function onInput(evt) {
  const evtValue = evt.target.value.trim();
  console.log(evtValue);
  const evtName = evt.target.name;
  console.log(evtName);
  const data = getData();
  const obj = data ? JSON.parse(data) : {};
  obj[evtName] = evtValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function savedData() {
  const data = getData();
  if (!data) {
    return;
  }
  const obj = JSON.parse(data);
  console.log(obj);
  const dataKeys = Object.keys(obj);
  for (let key of dataKeys) {
    formRef.elements[key].value = obj[key];
  }
  console.log(dataKeys);
}
savedData();

function onSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(getData()));
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
}

function getData() {
  return localStorage.getItem('feedback-form-state');
}
