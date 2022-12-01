var startButton = document.querySelector(".start-button");
var highScore = document.querySelector("#high-score");
var timer = document.querySelector("#timer");
var startScreen = document.querySelector(".start-screen");
var questionArea = document.querySelector(".question-area")

var h2El = document.createElement("h2")
var ulEl = document.createElement("ul")

startButton.addEventListener('click', startQuiz);

var secondsLeft = 100;
var questionCount = 0;
var score = 0;
var initials = "";

var questionList = [

    {
        question: "Which one creates the basic structure of a page?",
        choices: ["git", "CSS", "HTML", "JavaScript"],
        answer: "HTML"
    },

    {
        question: "Which one is NOT a semantic element?",
        choices: ["nav", "aside", "section", "span"],
        answer: "span"
    },

    {
        question: "Which method removes whitespace?",
        choices: ["split()", "trim()", "slice()", "pop()"],
        answer: "trim()"
    },

    {
        question: "If var a = 1, var b = 2, and var c = 3, which one is TRUE?",
        choices: ["c !== b", "a === c", "b % a == 1", "c <= a"],
        answer: "c !== b"
    },

    {
        question: "Which one is NOT a built-in functionalityini JavaScript?",
        choices: ["document", "onclick", "divTags", "currentTarget"],
        answer: "divTags"
    },

]

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

function checkAnswer() {
    questionArea.addEventListener("click", function(event) {
        console.log(event.target);
        var clickChoice = event.target.textContent;
        if (clickChoice == questionList[questionCount].answer) {
            console.log("answer is correct");
        } else {
            console.log("answer is wrong");
            secondsLeft = secondsLeft - 15;
        }
        questionCount++;
        presentQuestion();
    });
}

function presentQuestion() {

    console.log("question count " + questionCount)
    if (questionCount < 5) {
        h2El.textContent = questionList[questionCount].question;
        ulEl.innerHTML = `<li>${questionList[questionCount].choices[0]}</li><li>${questionList[questionCount].choices[1]}</li><li>${questionList[questionCount].choices[2]}</li><li>${questionList[questionCount].choices[3]}</li>`;
        //"<li>" + questionList[0].choices[0] + "</li><li>" + questionList[0].choices[1] + "</li><li>" + questionList[0].choices[2] + "</li><li>" + questionList[0].choices[3] + "</li>";
        checkAnswer();
    }
    else {
        console.log("questions are finished")
        score == secondsLeft;
        timer == secondsLeft;
        //clearInterval(timerInterval);
        //final screen
        questionArea.textContent = "";
        questionArea.innerHTML = "<textarea></textarea>";
        // enter initials in var initials
        localStorage.setItem(initials, score);
        console.log(initials, score);

    }
}

function startQuiz() {
    startScreen.textContent = "";
    startScreen.innerHTML = "<h1>Coding Quiz</h1>";
    questionArea.innerHTML = "";
    setTime();

    questionArea.appendChild(h2El);
    questionArea.appendChild(ulEl);
   
    presentQuestion();
}

highScore.addEventListener("click", showHighScore);

function showHighScore() {
    localStorage.getItem(initials)
}
