


const ratingBtns = document.querySelectorAll('.card--rating__rates__btn');

ratingBtns.forEach(button => {

    button.addEventListener('click', () => {
        // Reset all buttons
        ratingBtns.forEach(btn => btn.classList.remove('clicked')); 

        // Add class to the clicked button
        button.classList.add('clicked'); 
    });

})