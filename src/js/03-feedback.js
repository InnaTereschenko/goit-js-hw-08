import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
let valueForm = {};

initForm();

feedbackForm.addEventListener('submit', evt =>
    {evt.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
    form.reset();
    localStorage.removeItem(valueForm);
}
)

feedbackForm.addEventListener('input', throttle(evt => {
    
valueForm[evt.target.name] = evt.target.value;
    console.log(valueForm);
    localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
}), 500);

function initForm() {
   let saveForm = localStorage.getItem('valueForm');
    if (saveForm) {
        saveForm = JSON.parse(saveForm);
        
        Object.entries(saveForm).forEach(([name, value]) => {
            console.log(name, value);
            console.log(feedbackForm.elements);
            valueForm[name] = value;
            feedbackForm.elements[name].value = value;
        }

        )
    }

}