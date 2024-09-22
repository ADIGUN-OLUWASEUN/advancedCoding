const questions = [
    {
        question: 'What is HTML?',
        options: ['HTML describes the structure of a webpage', 'HTML is the standard markup language mainly used to create web pages', 'HTML consists of a set of elements that helps the browser on how to view the content', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript interpreter do?',
        options: ['Gives a warning', 'Ignores the statements', 'Throws an error', 'None of the above'],
        answer: 'Ignores the statements'
    },
    {
        question: 'Which of the following is used to read an HTML page and render it?',
        options: ['Web matrix', 'Web server', 'Web browser', 'Web network'],
        answer: 'Web browser'
    },
    {
        question: 'Javascript is an______language?',
        options: ['Object-based', 'Object-oriented', 'Procedural', 'None of the above'],
        answer: 'Object-oriented'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        options: ['let', 'var', 'Both A and B', 'None of the above'],
        answer: 'Both A and B'
    }
];

let maxSecs = 60;
let maxMins = 2;
let interval;
let score = 0;
let currentQuestionIndex = 0;
let userAnswers = [];

let secs = document.getElementById('secs');
let startButton = document.getElementById('startBTN');
let quest = document.getElementById('questions');
let nextButton = document.getElementById('nextBTN');
let prevButton = document.getElementById('prevBTN');
let tryingAgain = document.getElementById('tryAgain');

tryingAgain.style.display = 'none'

function startBTN() {
    interval = setInterval(timer, 1000);
    startButton.disabled = true; // Disabling the start button
    startButton.style.display = 'none'
    displayQuestion(currentQuestionIndex);
}

function timer() {
    if (maxSecs === 0 && maxMins === 0) {
        clearInterval(interval); // Stop the timer
        submitTest();
        return; // Exit the function to prevent further execution
    }

    if (maxSecs === 0) {
        maxSecs = 59;
        maxMins--;
    } else {
        maxSecs--;
    }

    secs.innerHTML = `
        <span>${maxMins}</span> :
        <span>${maxSecs < 10 ? '0' : ''}${maxSecs}</span>
    `;
}

function displayQuestion(index) {
    let question = questions[index];
    let optionsHTML = '';

    for (let i = 0; i < question.options.length; i++) {
        let checked = userAnswers[index] === question.options[i] ? 'checked' : '';
        optionsHTML += `
            <div class="ms-4">
                <input value="${question.options[i]}" class="form-check-input bg-primary option" type="radio" name="flexRadioDefault" id="option${i}" ${checked}>
                <label class="form-check-label" for="option${i}">${question.options[i]}</label>
            </div>
        `;
    }

    quest.innerHTML = `
        <div>
            <fieldset>
                <legend><span>${index + 1}.</span> ${question.question}</legend>
                ${optionsHTML}
            </fieldset>
            <div class="row btn-wrapper btnFlex">
        <button class="btn btn-primary" onclick="previousBtn()" id="prevButton">Previous</button>
        <button class="btn btn-primary" onclick="nextBtn()" id="nextButton">Next</button>
        <button class="btn btn-primary" onclick="submitBtn()" id="submitBtn">Submit</button>
    </div>
        </div>
    `;

    // Disable the Previous button if on the first question
    prevButton.disabled = index === 0;

    // Disable the Next button if on the last question
    nextButton.disabled = index === questions.length - 1;
}

function saveUserAnswer() {
    let selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = selectedOption.value;
    }
}

function previousBtn() {
    saveUserAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function nextBtn() {
    saveUserAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function submitBtn() {
    saveUserAnswer();
    quest.innerHTML = '';
    let resultWrapper = document.getElementById('resultWrapper');
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }
    clearInterval(interval); // Stop the timer

    window.scrollTo({ top: 0, behavior: "smooth" });

    resultWrapper.innerHTML = `Your score is ${score} out of ${questions.length}. You ${score > questions.length / 2 ? 'Passed' : 'Failed'}`;

    startButton.style.display = 'block'
    tryingAgain.style.display = 'block'

    let selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
    console.log(selectedOption);
    

    if(!selectedOption){
        // alert('You still have some unanswered question')
        confirm('You still have some unanswered question, Are you sure you want to submit?')
    }
}

function submitTest() {
    submitBtn();
}

function retryTest() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    startButton.disabled = false;
    currentQuestionIndex = 0;
    score = 0;
    maxSecs = 60;
    maxMins = 2;
    interval = setInterval(timer, 1000);
    userAnswers = [];
    resultWrapper.innerHTML = '';
    displayQuestion(currentQuestionIndex);
    nextButton.disabled = true;
    prevButton.disabled = true;
}
