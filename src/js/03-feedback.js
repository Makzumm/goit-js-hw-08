import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

const keyForStorage = 'feedback-form-state'

form.addEventListener('input', throttle(onInputValues, 250));

form.addEventListener('submit', onFormSubmit);

const formData = {};

saveValues();

function onFormSubmit(evt) {
    evt.preventDefault();   

    deleteValuesFromLocalStorage()

    evt.currentTarget.reset();
}

function onInputValues(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(keyForStorage, JSON.stringify(formData));
}

function saveValues() {
    const formValues = localStorage.getItem(keyForStorage);
    const savedFormValues = JSON.parse(formValues);

    if (savedFormValues) {
        emailEl.value = savedFormValues.email;
        messageEl.value = savedFormValues.message;
    }
}

function deleteValuesFromLocalStorage() {
    localStorage.clear(keyForStorage);
}




