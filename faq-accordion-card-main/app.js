const questions = document.querySelectorAll('.faq-card__list__question'); 

console.log(questions);

questions.forEach(question => {

    question.addEventListener('click', () => {
        // toggle answer of question
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

        // style question   
        question.style.fontWeight = '700';
        question.firstElementChild.style.transform = 'rotate(180deg)';

        // close questions that are open
        questions.forEach(q => {
            if (q !== question) {
                // undo styling from toggle state
                q.nextElementSibling.style.display = 'none';
                q.style.fontWeight = '400';
                q.firstElementChild.style.transform = 'unset'
            }
        });

    });
});