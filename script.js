var view = document.querySelector(".jumbotron");
var highScore = document.querySelector("#scores");
var quiz = document.querySelector("#quiz");
var rules = ["THE RULES", "1) Total time: 75 seconds", "2) Wron answer: -5 seconds", "3) Correct answer: +1 point", "4) Get the most points"];
var time = 5;
var questions = [
    {
        title: "Which of these is a color?",
        choices: ["cat", "brick", "bird", "blue"],
        answer: "blue"
    },
    {
        title: "Which of these is a not a state?",
        choices: ["Solid", "Kansas", "Shock", "Puerto Rico"],
        answer: "Puerto Rico"
    },
    {
        title: "Whats the square root of 81?",
        choices: ["7", "81", "9", "Pi"],
        answer: "9"
    },
    {
        title: "Which of these is not a type of boat?",
        choices: ["Trawler", "Wavy Hull", "Centre Console", "Bow Rider"],
        answer: "Wavy Hull"
    },
    {
        title: "When was the toaster invented?",
        choices: ["1942", "1893", "1868", "1907"],
        answer: "1893"
    }
]
var qIndex = 0;
var points = 0;
var initials = document.createElement("input");




//helper functions

//clears the quiz window
function clear() {

    view.innerHTML = "";
}

//starts the timer and show the point counter
function timer() {
    var pointEl = document.createElement("span");
    pointEl.setAttribute("class", "badge badge-pill badge-info")
    pointEl.setAttribute("style", "position: absolute; right: 7rem; top: 1rem; font-size: large;")
    pointEl.textContent = "Points: " + points;
    view.appendChild(pointEl);

    var timeEl = document.createElement("span");
    timeEl.setAttribute("class", "badge badge-pill badge-success")
    timeEl.setAttribute("style", "position: absolute; right: 2rem; top: 1rem; font-size: large;")
    timeEl.textContent = "Time: " + time;
    view.appendChild(timeEl);
    var timerInterval = setInterval(function () {
        time--;
        timeEl.textContent = "Time: " + time;

        if (time <= 0) {
            clearInterval(timerInterval);
            clear();
            scoreWindow();
        }

    }, 1000);


}

//checks answer
function answerCheck(x) {
    var y = questions[qIndex].answer;
    if (x === y) {
        points = points + 1;
        console.log("correct");
    }
    else {
        time = time - 5;
        console.log("wrong");
    }
}


//Makes score window
function scoreWindow() {
    var scoreReport = document.createElement("p");
    scoreReport.textContent = "You got " + points + " points.";
    view.appendChild(scoreReport);

    if (points > localStorage.getItem("score")) {
        var scoreSave = document.createElement("p");
        scoreSave.textContent = "If you want to save your score, type in your name below and click save";
        view.appendChild(scoreSave);

        initials.setAttribute("type", "text");
        initials.setAttribute("id", "name")
        view.appendChild(initials,);
        var saveEl = document.createElement("span");
        saveEl.setAttribute("class", "badge badge-pill badge-secondary")
        saveEl.setAttribute("id", "save-btn")
        saveEl.textContent = "Save Score";
        view.appendChild(saveEl);
    }
    else {
        var message = document.createElement("p");
        message.textContent = "Sorry, you can't save your score cause you didn't get a high score";
        view.appendChild(message);

    }
}

//save score to local storage
function scoreSave() {

    var name = initials.value;
    localStorage.setItem("score", points);
    localStorage.setItem("name", name);

}

//presents questions
function qs() {
    var question = document.createElement("p");
    question.setAttribute("style", "text-align: center; font-size: 24px")


    question.textContent = questions[qIndex].title;
    view.appendChild(question);
    for (var i = 0; i < 4; i++) {
        var answers = document.createElement("p")
        answers.setAttribute("class", "badge badge-pill badge-info")
        answers.setAttribute("style", "font-size: large;display: block")
        answers.setAttribute("id", "ans")
        answers.textContent = questions[qIndex].choices[i];
        view.appendChild(answers);
    };
}


//fills the jumbotron with the quiz start screen
function welcome() {
    //resets variables
    time = 75;
    points = 0;
    qIndex = 0;

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




// senses clicks within the view container
view.addEventListener("click", function (event) {
    event.preventDefault();
    //starts the Quiz
    if (event.target.matches("button")) {
        console.log("Quiz Time")
        //clear view
        clear();
        //start timer
        timer();
        //present question
        qs();
        //track score
    }
    //resieves answer
    if (event.target.matches("#ans")) {
        //gets chosen answer
        var chosenAnswer = event.target.textContent;
        answerCheck(chosenAnswer);
        //clear and load next q
        qIndex = qIndex + 1;
        if (qIndex === questions.length) {
            qIndex = 0;
        }
        clear();
        timer();
        qs();
    }
    //click Save
    if (event.target.matches("#save-btn")) {
        scoreSave();
        clear();
        welcome();
    }
});

//shows the leaderboard
highScore.addEventListener("click", function (event) {
    event.preventDefault();
    highScore.setAttribute("class", "nav-link active");
    quiz.setAttribute("class", "nav-link");
    clear();
    var hs = document.createElement("p");
    hs.textContent = "The high score is: " + localStorage.getItem("score") + " and it was gotten by: " + localStorage.getItem("name");
    hs.setAttribute("style", "text-align:center;font-size: 32px");
    view.appendChild(hs);


});

//takes you to quiz start window 
quiz.addEventListener("click", function (event) {
    event.preventDefault();
    quiz.setAttribute("class", "nav-link active");
    highScore.setAttribute("class", "nav-link");
    clear();
    welcome();
});

welcome();