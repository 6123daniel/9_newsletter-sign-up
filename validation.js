const form = document.getElementById('form');
const email_input = document.getElementsByClassName('form__email--input');
const error_div = document.getElementById('error');
const main_container = document.getElementsByClassName('container');
const success_container = document.getElementsByClassName('success');
const dismiss_button = document.getElementsByClassName('button--dismiss');
const email_span = document.getElementById('emailSpan');
const email = email_input[0].value;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];
    if (email_input[0].value === '' || email_input[0].value == null || email_input[0].value.includes('@') != true) {
        // if email is empty, null or does not contain an @:
        console.log('invalid email')
        errors.push('Please enter a valid email');
        error_div.innerText = errors.join('. ');
    }

    else {
        console.log('email: ' + email_input[0].value);
        main_container[0].style.display = 'none';
        success_container[0].style.display = 'flex';
        error_div.innerText = "";
        email_span.innerText = email_input[0].value;
    }
})

// dismiss success page
dismiss_button[0].addEventListener('click', () => {
    main_container[0].style.display = 'flex';
    success_container[0].style.display = 'none';
})