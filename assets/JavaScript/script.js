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

        answerContainers[questionNumber].style.color = "crimson";
      } 
      else {
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


function updateTimer(opening){
  var time = opening - new Date();
  return {
    'seconds': Math.floor( (time/20000)
    'total': time
  }
}

function animateClock(span) {
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },100);
}

  function startTimer(id, opening) {
  var timerInterval= setInterval(function(){
var clock = document.getElementById(clock);
var timer = updateTimer(opening);

clock.innerHTML = '<span>' + timer.seconds + '</span>'

var spans = clock.getElementsByTagName("span");
animateClock(spans[1]);
if(timer.seconds == 20) animateClock(spans[1]);

if(timer.total < 1) {
  clearInterval(timerInterval);
  clock.innerHTML= '<span>0</span><span>0</span>';
}

  }, 20000);
}


  window.onload = function() {
  var opening = new Date(20000);
  startTimer("clock", opening);
}

})();
