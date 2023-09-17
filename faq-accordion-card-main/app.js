const questions = document.querySelectorAll('.faq-card__list__question'); 

questions.forEach(question => {

    question.addEventListener('click', () => {
        
        // toggle answer of question
        const arrow =  question.firstElementChild;
        const answer = question.nextElementSibling;

        // style question clicked
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrow.style.transform = 'unset';
            question.style.fontWeight = '400'; 
        } else {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
            question.style.fontWeight = '700'; 
        }
        
        // close questions that are open
        questions.forEach(q => {
            if (q !== question) {
                // undo styling from toggle state
                q.nextElementSibling.style.display = 'none';
                q.style.fontWeight = '400';
                q.firstElementChild.style.transform = 'unset';
            }
        });

    });
});