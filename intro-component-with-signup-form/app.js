const validateForm = () => {
    const form = document.querySelector('.cta__sign-up__form');
    let isValid = true; 

    const requiredElements = form.querySelectorAll('[required]');

    // criteria of how an email should look like
    const emailCriteria = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    requiredElements.forEach(element => {
        if(element.value.trim() === "" || (element.type === 'email' && !emailCriteria.test(element.value))) { // Logic checking if the fields are empty

            // prevent form from submitting 
            isValid = false; 

            // Enable styling error state
            element.classList.add('cta__sign-up__form__input--error');
                        
            let nextEl = element.nextElementSibling; 
            nextEl.style.display = 'block'; 
            nextEl.innerHTML = element.type === 'email' ? `Looks like this is not an email.`:
                                                          `${element.name} cannot be empty.`;

        } else {
            // disable styling error state
            element.classList.remove('cta__sign-up__form__input--error');
        }
    });

    // return value to submit or prevent submitting form.
    return isValid;
}

