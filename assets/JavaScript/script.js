(function() {
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];

      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }


      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
        question: "What dragon appears in the human guise of Lord Victor Nefarius?",
        answers: {
            a: "Wiggleshits",
            b: "Nefarian",
            c: "Nefariax",
    
        },
        correctAnswer: "b"
    },
    {
        question: "Parody of a famous heiress in Azeroth?",
        answers: {
            a: "Haris Pilton",
            b: "Ricole Nichie",
            c: "Rartin Mickey",
        },
        correctAnswer: "a"
    },
    {
        question: "King of Stormwinds Son?",
        answers: {
            a: "Askren",
            b: "Varian",
            c: "Angus",
        },
        correctAnswer: "b"
    },
    {
        question: "Esteemed Undead Queen, Beatiful but mean?",
      answers: {
        a: "Servyla",
        b: "Loraena",
        c: "Sylvannas",
    
    },
    correctAnswer: "c"
    },
    ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);

  var timer = 20000;
function reload()
{
	window.location = 'http://www.trivianation.com/10-tips-to-win-at-trivia/';
}
})();
