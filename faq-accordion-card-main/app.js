const questions = document.querySelectorAll('.faq-card__list__question'); 

console.log(questions);

questions.forEach(question => {

    question.addEventListener('click', () => {
        // toggle answer of question
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

        // style question   
        question.style.fontWeight = '700';

        // close questions that are open
        questions.forEach(q => {
            if (q !== question) {
                q.nextElementSibling.style.display = 'none';
                q.style.fontWeight = '400';
            }
        });

    });
});