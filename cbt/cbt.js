let start = document.getElementById('start');
let questionWrapper = document.getElementsByClassName("questionWrapper")[0];
let resultWrapper = document.getElementsByClassName("resultWrapper")[0];
let submit = document.getElementById("submit");
let score = 0;
let currentIndex = 0;

const questions = [
  {
    question: "What is HTML?",
    options: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of element that helps the browser how to view the content",
      "All of the Above",
    ],
    answer: "All of the Above",
  },
  {
    question: "Who is the father of HTML?",
    options: [
      "Rasmus Lerdolf",
      "Seun Adigun",
      "Tim Berners-lee",
      "Sergey Brin",
    ],
    answer: "Rasmus Lerdolf",
  },
  {
    question: "HTML stands for ______",
    options: [
      "Hyper text markup language",
      "Hyper text machine language",
      "Hyper text marking language",
      "Hyper text make-up language",
    ],
    answer: "Hyper text markup language",
  },
  {
    question:
      "Upon encountering empty statements, what does javascript interpreter do?",
    options: [
      "Gives a warning",
      "Throw an error",
      "None of the above",
      "Ignores the statement",
    ],
    answer: "Ignores the statement",
  },
  {
    question:
      "Which of the following is used to read an HTML page and render it?",
    options: ["web matrix", "web server", "web browser", "web network"],
    answer: "web browser",
  },
];

start.addEventListener('click', ()=>{
    displayQuestion()
})

function displayQuestion(){
    if (questions) {
        questions.forEach((el, i) => {
            
          questionWrapper.innerHTML = `
            <div>
             <fieldset>
                    <legend><p>${i + 1}. ${el.question}</p></legend>
                    <div>             <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault1" value = '${
            el.options[0]
          }'>
          <label class="form-check-label" for="flexRadioDefault1">
            ${el.options[0]}
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault2" value = '${
            el.options[1]
          }'>
          <label class="form-check-label" for="flexRadioDefault2">
                ${el.options[1]}
          </label>
        </div>
         <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault2" value = '${
            el.options[2]
          }' >
          <label class="form-check-label" for="flexRadioDefault2">
                ${el.options[2]}
          </label>
        </div>
         <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault2" value = '${
            el.options[3]
          }'>
          <label class="form-check-label" for="flexRadioDefault2">
                ${el.options[3]}
          </label>
        </div></div>
            </fieldset>
    
                    </div>
                `;
        });
      }
      start.style.display = 'none'
}


previous.addEventListener('click', ()=>{
   if (currentIndex = questions.length - 1) {
        currentIndex--
   }
   displayQuestion()
})

next.addEventListener('click', ()=>{
    if(currentIndex > 0){
        currentIndex++
    }
    displayQuestion()
})

submit.addEventListener("click", () => {
  let canSubmit = confirm('Are you Sure?')
  if (canSubmit) {
    questions.forEach((el, i) => {
      const selectedOption = document.querySelector(
        `input[name='flexRadioDefault${i}']:checked`
      );
      if (selectedOption) {
        const selectedValue = selectedOption.value;
        if (selectedValue === el.answer) {
          score++;
        }
        selectedOption.checked = false; // uncheck all selected options
      }
    });
    // window.scrollTo({top: 0, behavior: 'smooth'}) // scroll to the top
    window.scrollTo(0,0)   // scroll to the top
    resultWrapper.textContent = `Your score is ${score} out of ${questions.length}. You ${score > questions.length / 2 ? 'Passed' : 'Failed'}`;
    submit.textContent = 'Try again'
  }
});
