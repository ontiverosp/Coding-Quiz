var view = document.querySelector(".jumbotron");
var highScore = document.querySelector("#scores");
var quiz = document.querySelector("#quiz");
var rules = ["THE RULES", "1)", "2)", "3)","4)"];
var time = 75;



//helper functions

//clears the quiz window
function clear(){

}

//starts the timer
function timer(){


    if (time === 0){
        scoreWindow();
    }
}

//keeps track of scores
function score(){

}

//Makes score window
function scoreWindow(){

}

//presents questions
function questions(){

}

//fills the jumbotron with the quiz start screen
function welcome(){
    // Creates the title.
    var title = document.createElement("h1");
    title.textContent = "Coding Quiz!";
    title.setAttribute("style", "text-align:center;");
    view.appendChild(title);
    // Explains the rules for the quiz
    for (var i = 0; i < rules.length; i++) {
    var ruleLine = document.createElement("p");
    ruleLine.textContent = rules[i];
    view.appendChild(ruleLine);
    };

    
    var start = document.createElement("button");
    start.textContent = "Start Quiz!";
    start.setAttribute("class", "btn btn-success");
    view.appendChild(start);
};




// starts quizz
view.addEventListener("click", function(event){
event.preventDefault();
if(event.target.matches("button")) {
    console.log("Quiz Time")
    //clear view
    clear();
    //start timer
    timer();
    //present question
    questions();
    //track score
  }
});

//shows the leaderboard
highScore.addEventListener("click", function(event){
    event.preventDefault();
    highScore.setAttribute("class", "nav-link active");
    quiz.setAttribute("class", "nav-link");
    clear();

});

//takes you to quiz start window 
quiz.addEventListener("click", function(event){
    event.preventDefault();
    quiz.setAttribute("class", "nav-link active");
    highScore.setAttribute("class", "nav-link");
    clear();
    welcome();
});

welcome();