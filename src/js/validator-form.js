const form = document.querySelector('#order_form');
const sendBtn = document.querySelector('#send-button');

sendBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if (isFormValid(form)) {
        console.log('Sending to server...');
    } else {
        console.log('Form is not valid!');
    }
});

function isFormValid(form) {
    let isValid = true; 

    if(!validation(form.elements.name)) {
        isValid = false;
    }
    if(!validation(form.elements.phone)) {
        isValid = false;
    }
    if(!validation(form.elements.comment)) {
        isValid = false;
    }

    return isValid;
}

function validation(element) {
    if(!element.checkValidity()){
        element.nextElementSibling.textContent = element.validationMessage;
        element.classList.add('form__input-error');
        return false;
    } else {
        element.nextElementSibling.textContent = '';
        element.classList.remove('form__input-error');
        return true; 
    }
};



const phone = document.querySelector('#phone');

if(phone) {phone.addEventListener('keydown', (e) => {
    let isDigit = false
    let isPlus = false
    let isDash = false
    let isAction = false

    if(e.key >= 0 || e.key <= 9) {
        isDigit = true
    };

    if(e.key === '+') {
        isPlus = true
    };

    if(e.key === '-') {
        isDash = true 
    };

    if(
        e.key === 'ArrowRight' || 
        e.key === 'ArrowLeft' ||
        e.key === 'Backspace'
    ) {
        isAction = true
    };

    if(!isDigit && !isPlus && !isDash && !isAction) {
        e.preventDefault();
    };
})};  