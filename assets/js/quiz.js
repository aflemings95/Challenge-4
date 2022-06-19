//question-object
var questionArray = [
    questionOne = {
     prompt: "1. Let It Go!",
     rightAnswer: "Frozen",
     wrongAnswer: ["Beauty and the Beast", "Sleeping Beauty", "Princess and the Frog"]
    },
    questionTwo = {
        prompt: "You've Got a Friend in Me!",
        rightAnswer: "Toy Story",
        wrongAnswer: ["Cinderella", "Mulan", "Sleeping Beauty"]
    },
    questionThree = {
        prompt: "You'll Be in My Heart",
        rightAnswer: "Tarzan",
        wrongAnswer: ["Cinderella", "Mulan", "Sleeping Beauty"]
    },
    questionFourth = {
        prompt: "Make a Man Out of You",
        rightAnswer: "Mulan",
        wrongAnswer: ["Beauty and the Beast", "Sleeping Beauty", "Princess and the Frog"]
    },
    questionFive = {
        prompt:"The Bare Necessities",
        rightAnswer: "Jungle Book",
        wrongAnswer: ["Beauty and the Beast", "Sleeping Beauty", "Princess and the Frog"]
    },
]

//variable for startButton
var startButtonEl = document.getElementById('#start-btn');
//variable for question container
var questionContainer = document.querySelector('#questions-wrapper');
 //event listener for start button
 //startButtonEl.addEventListener("click", startQuiz);
 var setNextQuestion
 var quizButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;
  
    if (targetEl.matches("#start-btn")) {
        document.querySelector('#start-Quiz').remove();
        document.querySelector('#start-btn').remove();
        for (i=0; i < 4; i++){
            var answerButton = document.createElement("button")
            var answerButtonEl = document.createElement("li")
            answerButton.textContent = "Next Question"
            answerButton.className = "Next-QuestionBut"
            var answerButtonUl = document.querySelector("#quiz-questions")
            answerButtonEl.appendChild(answerButton)
            answerButtonUl.appendChild(answerButtonEl)
        }
    }
  };





questionContainer.addEventListener('click', quizButtonHandler);











//Click Start Button to Start Quiz
//Question 1 pops up
    //what answer was submitted
    //determine if answer was right or wrong
    //Total up all the right answers
//Function to replace textContent of Question
    //replace textContent
    //determine if answer was right or wrong
    //Total up all the right answers
        //Continue replace textContent Function for the length of the array 
        //return total right answers

   

