document.addEventListener('DOMContentLoaded', function() {
    // Get submit button element
    const submitButton = document.getElementById('submit-answer');
    
    // Define correct answers for the quiz questions
    const correctAnswers = {
        'question1': 'paris',
        'question2': 'purple',
        'question3': '4'
    };
    
    // checkAnswer function - main requirement for task 1
    function checkAnswer() {
        // Get all question elements
        const questions = document.querySelectorAll('.quiz-question');
        let totalCorrect = 0;
        let totalQuestions = questions.length;
        
        questions.forEach(function(questionElement) {
            const questionId = questionElement.getAttribute('data-question');
            
            // Retrieve the correct answer for this question
            const correctAnswer = correctAnswers[questionId];
            
            // Retrieve the user's selected answer
            const selectedOption = questionElement.querySelector('input[type="radio"]:checked');
            const userAnswer = selectedOption ? selectedOption.value : null;
            
            // Get feedback element for this question
            const feedbackElement = questionElement.querySelector('.question-feedback');
            
            // Comparison of user's answer with correct answer
            if (userAnswer === correctAnswer) {
                // Providing feedback for correct answer
                feedbackElement.textContent = 'Correct!';
                feedbackElement.style.color = '#28a745';
                feedbackElement.style.backgroundColor = '#d4edda';
                totalCorrect++;
            } else {
                // Providing feedback for incorrect answer
                feedbackElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
                feedbackElement.style.color = '#dc3545';
                feedbackElement.style.backgroundColor = '#f8d7da';
            }
            
            // Make feedback visible
            feedbackElement.style.display = 'block';
        });
        
        // Show overall score
        const scoreElement = document.getElementById('quiz-score');
        scoreElement.textContent = `You got ${totalCorrect} out of ${totalQuestions} questions correct!`;
        scoreElement.style.display = 'block';
    }
    
    // Adding event listener to the "Submit Answer" button
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            checkAnswer();
        });
    }
});