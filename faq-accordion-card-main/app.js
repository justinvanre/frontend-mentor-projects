const questions = document.querySelectorAll('.faq-card__list__question'); 

const showAnswer = (question, answer) => {
    answer.style.display = 'block';
    // rotation arrow
    question.nextElementSibling.style.transform = 'rotate(180deg)';
    question.style.fontWeight = '700'; 
}


const hideAnswer = (question, answer) => {
    answer.style.display = 'none';
    question.nextElementSibling.style.transform = 'unset';
    question.style.fontWeight = '400'; 
}


questions.forEach(question => {

    question.addEventListener('click', () => {
        
        // toggle answer of question
        let answer = question.nextElementSibling;

        // style question clicked
        if (answer.style.display === 'block') {
            hideAnswer(question, answer);
        } else {
            showAnswer(question, answer);
        }
        
        // close questions that are open
        questions.forEach(q => {
            if (q !== question) {
                // undo styling from toggle state
                answer = q.nextElementSibling;
                hideAnswer(q, answer);
            }
        });

    });
});