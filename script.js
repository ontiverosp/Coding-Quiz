var view = document.querySelector(".jumbotron");
var rules = ["THE RULES", "1)", "2)", "3)","4)"];
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

welcome();