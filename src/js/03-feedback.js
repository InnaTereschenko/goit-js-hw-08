import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

});

populateForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function populateForm() {
    const saveForm = localStorage.getItem(STORAGE_KEY);
    const parseForm = JSON.parse(saveForm);
    if (parseForm.email) {
        refs.form.email.value = parseForm.email;
    }
    if (parseForm.message) {
        refs.form.message.value = parseForm.message;
    }
        
}
    







// const feedbackForm = document.querySelector('.feedback-form');
// let valueForm = {};

// initForm();

// feedbackForm.addEventListener('submit', evt =>
//     {evt.preventDefault();
//     const formData = new FormData(feedbackForm);
//     formData.forEach((value, name) => console.log(value, name));
//     form.reset();
//     localStorage.removeItem(valueForm);
// }
// )

// feedbackForm.addEventListener('input', throttle(evt => {

// valueForm[evt.target.name] = evt.target.value;
//     console.log(valueForm);
//     localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
// }), 500);

// function initForm() {
//    let saveForm = localStorage.getItem('valueForm');
//     if (saveForm) {
//         saveForm = JSON.parse(saveForm);
        
//         Object.entries(saveForm).forEach(([name, value]) => {
//             console.log(name, value);
//             console.log(feedbackForm.elements);
//             valueForm[name] = value;
//             feedbackForm.elements[name].value = value;
//         }

//         )
//     }

// }