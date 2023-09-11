const validateForm = () => {
    const form = document.querySelector('.cta__sign-up__form');
    let isValid = true; 

    const requiredElements = form.querySelectorAll('[required]');

    // criteria of how an email should look like
    const emailCriteria = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    /* 
        Logic checking if the fields are empty 
    */
    requiredElements.forEach(element => {
        if(element.value.trim() === "") {
            // prevent form from submitting 
            isValid = false; 

            // Enable styling error state
            element.classList.add('cta__sign-up__form__input--error');
            let siblingEl = element.nextElementSibling; 
            siblingEl.innerHTML = `${element.name} cannot be empty.`;
            siblingEl.style.display = 'block';

        } else if (element.type = 'email' && !emailCriteria.test(element)) {
            // logic to check if email is well formulated
            isValid = false;
            element.classList.add('cta__sign-up__form__input--error');

            let siblingEl = element.nextElementSibling; 
            siblingEl.innerHTML = `Looks like this is not an email`;
            siblingEl.style.display = 'block';

        } else {
            // disable styling error state
            element.classList.remove('cta__sign-up__form__input--error');
        }
    });

    // return value to submit or prevent submitting from.
    return isValid;
}
