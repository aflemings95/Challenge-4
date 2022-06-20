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

var userStats = {
    totalScore: 0,
    name: "",
    time: 30
}

var junkTime = 0;
var questionCounter = 0;
var timeIncrement = function (){
    userStats.time--
}


//variable for startButton
var startButtonEl = document.getElementById('#start-btn');
//variable for question container
var questionContainer = document.querySelector('#questions-wrapper');
 //event listener for start button
 //startButtonEl.addEventListener("click", startQuiz);
 
 var quizButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;
    if(questionCounter <= 4) {
        
    
    if (targetEl.matches("#start-btn")) {
        junkTime = setInterval(timeIncrement, 1000);
        document.querySelector('#start-Quiz').remove();
        document.querySelector('#start-btn').remove();
        var promptEl = document.querySelector(".quiz-title") //replaced the h1 title with the quiz questions
        promptEl.textContent = questionArray[0].prompt
        var answerButton = document.createElement("button")
        var answerButtonEl = document.createElement("li")
        answerButton.textContent = questionArray[0].rightAnswer
        answerButton.id = "correct"
        var answerButtonUl = document.querySelector("#quiz-questions")
        answerButtonEl.appendChild(answerButton)
        answerButtonUl.appendChild(answerButtonEl)
        for (i=0; i < 3; i++){
            var answerButton = document.createElement("button")
            var answerButtonEl = document.createElement("li")
            answerButton.textContent = questionArray[0].wrongAnswer[i]
            answerButton.id = "incorrect"
            answerButton.className = "Next-QuestionBut"
            answerButtonEl.appendChild(answerButton)
            answerButtonUl.appendChild(answerButtonEl)
        }
    }
    else if (targetEl.matches('#correct')){
        userStats.totalScore++
        // debugger
        questionCounter++
        var rightAnswerButton = document.querySelector("#correct")
        var promptEl = document.querySelector(".quiz-title")
        promptEl.textContent = questionArray[questionCounter].prompt
        rightAnswerButton.textContent = questionArray[questionCounter].rightAnswer
        for (i=0; i<3; i++) {
            var wrongAnswerButton = document.querySelector("#incorrect")
           wrongAnswerButton.textContent = questionArray[questionCounter].wrongAnswer[i]
        }
        
    }
    else if (targetEl.matches('#incorrect')){
        questionCounter++
        var rightAnswerButton = document.querySelector("#correct")
        var promptEl = document.querySelector(".quiz-title")
        promptEl.textContent = questionArray[questionCounter].prompt
        rightAnswerButton.textContent = questionArray[questionCounter].rightAnswer
        for (i=0; i<3; i++) {
            var wrongAnswerButton = document.querySelector("#incorrect")
           wrongAnswerButton.textContent = questionArray[questionCounter].wrongAnswer[i]
        }
    }

}else {clearInterval (junkTime)}

  };

  


      







questionContainer.addEventListener('click', quizButtonHandler);











//Click Start Button to Start Quiz
//Question 1 pops up
    //what answer was submitted
    //determine if answer was right or wrong
        //create ids for the right buttons and the wrong buttons
    //Total up all the right answers
//Function to replace textContent of Question
    //replace textContent
    //determine if answer was right or wrong
    //Total up all the right answers
        //Continue replace textContent Function for the length of the array 
        //return total right answers

   

