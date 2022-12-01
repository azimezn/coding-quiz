var qaBank = [
    {question: "What is the capital of New Jersey?",
    answers: ["Paul", "Sam", "Eric", "Trenton"],
    correct: "Trenton"},
    {question: "What is the capital of New Jersey?",
    answers: ["Paul", "Sam", "Eric", "Springfield"],
    correct: "Springfield"},
    {question: "What is the capital of New Jersey?",
    answers: ["Paul", "Sam", "Eric", "Little Rock"],
    correct: "Little Rock"},
  ]
  
  var currentQuestion = 0;
  
  var startButton = document.querySelector("#start-button");
  var questionArea = document.querySelector("#question-title");
  var questionBody = document.querySelector("#question-body");
  
  
  function renderCurrentQuestion () {
    // console.log('game button clicked')
    questionArea.textContent = qaBank[currentQuestion].question;
    questionBody.innerHTML = <li>${qaBank[currentQuestion].answer[0]}</li><li>${qaBank[currentQuestion].answer[1]}</li><li>${qaBank[currentQuestion].answer[2]}</li><li>${qaBank[currentQuestion].answer[3]}</li>
    // I have ${animals.length} 
  }
  
  startButton.addEventListener('click', renderCurrentQuestion);
  
  //we want to use delegation when dealing with eventlisteners and dynamic elements on the dom
  //how delegations works is we attach the event listener directly to the dom then filter thru it to make sure its actually clicking on the desired target.
  
  document.addEventListener("click", checkForAnswer);
  
  function checkForAnswer(event) {
  
    if (event.target.matches("li")) {
      console.log(event.target);
      if (event.target.textContent === qaBank[currentQuestion].correct) {
        console.log("thats the right answer");
        //maybe do something to the score instead of just console log
      } else {
        console.log ("wrong answer")
      }
  
      currentQuestion++;
      renderCurrentQuestion();
    }
  }
  
  //view Highscores anchor tag at top of html
  //view highscores is a separate webpage with a back button
  //use table for highscores (table page saved in bookmarks) dynamically stored