
const ratingCard = document.querySelector('.card--rating');
const ratingBtns = document.querySelectorAll('.card--rating__rates__btn');
const ratingSubmitBtn = document.querySelector('.card--rating__btn');

/*

    Below is the logic for the rating btns

*/

let indexBtnClicked = 0;

ratingBtns.forEach((button, index) => {

    button.addEventListener('click', () => {
        // return position of clicked button
        indexBtnClicked = index + 1; 

        // Reset all buttons
        ratingBtns.forEach(btn => btn.classList.remove('clicked')); 

        // Add class to the clicked button
        button.classList.add('clicked'); 
    });

});


/*

    Logic for transitioning cards

*/

const thankYouCard = document.querySelector('.card--thank-you');
const ratingThanYouCard = document.querySelector('.card--thank-you__rating p')


ratingSubmitBtn.addEventListener('click', () => {
    
    // check if a button is selected before moving to the other card
    if (indexBtnClicked != 0) 
    {
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block'; 

        ratingThanYouCard.textContent = `You selected ${indexBtnClicked} out of ${ratingBtns.length}`;
    }
})