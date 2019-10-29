

let begin = 0
let trivia = 0
let questionNumber = 0
let quiz = 0
let multipleChoice = 0
let option = 0
let choiceA = 0
let choiceB = 0
let choiceC = 0
let choiceD = 0
let correct = 0
let timer;
let minutes = 1;
let seconds = 60;


let qNA = [
    [" Who is the NBA's all-time leader in assists ?", "Doc Rivers", "Jerry West", "John Stockton", "Scott Skiles", "C"],

    ["Which team won the NBA championship for the 2018-19 season ?", "Toronto Raptors", "Golden State Warriors", "Cleveland Cavaliers", "Los Angeles Lakers", "A"],

    ["How  many points did Wilt Chamberlain score to set an NBA record ?", "100", "50", "110", "35", "A"],

    ["Michal Jordan averges an NBA all-time high ppg ?", "32", "40", "30", "55", "C"],

    ["The NBA's first ever unanimous MVP?", "James Harden", "Russell Westbrook", "Stephen Curry", "Lebron James", "C"]


];



function _(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    trivia = _("trivia");
    let score = Math.round(correct / qNA.length * 100);
    if (begin >= qNA.length) {
        trivia.innerHTML = "<h3>You got " + correct + " correct of " + qNA.length + " questions</h3>";
        trivia.innerHTML += "<h3> Your Grade : " + score + "% </h3>";
        trivia.innerHTML += "<h4>Finished in:" + seconds + " Seconds</h4>";
        trivia.innerHTML += "<strong><button onclick='Restart()'>Restart</button></strong>";
        _("questionNumber").innerHTML = "<h3>You're Done!</h3>";
        begin = 0;
        correct = 0;
        clearTimeout(timer);
        document.getElementById("counter").style.display += 'none';
        document.getElementById("displayCounter").style.display += 'none';
        return false;
    }
    _("questionNumber").innerHTML = "<h3>Question " + (begin + 1) + " of " + qNA.length + "</h3>";
    quiz = qNA[begin][0];
    choiceA = qNA[begin][1];
    choiceB = qNA[begin][2];
    choiceC = qNA[begin][3];
    choiceD = qNA[begin][4];
    trivia.innerHTML = "<h3>" + quiz + "</h3>";
    trivia.innerHTML += "<input type='radio' name='option' value='A'> " + choiceA + "<br>";
    trivia.innerHTML += "<input type='radio' name='option' value='B'> " + choiceB + "<br>";
    trivia.innerHTML += "<input type='radio' name='option' value='C'> " + choiceC + "<br>";
    trivia.innerHTML += "<input type='radio' name='option' value='D'> " + choiceD + "<br><br>";
    trivia.innerHTML += "<strong><button onclick='checkAnswer()'>Next Question</button></strong><br><br>";


}

function checkAnswer() {
    option = document.getElementsByName("option");
    multipleChoice = -1;
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            multipleChoice = option[i].value;
        }
    }
    if (multipleChoice == qNA[begin][5]) {
        correct++;
    }
    begin++;
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);

function Restart() {

    location.href = "index.html";
}




function counter() {
    displayCounter();

}

function displayCounter() {
    if (parseInt(seconds) > 0) {
        seconds = parseInt(seconds) - 1;
        document.getElementById("displayCounter").innerHTML = "Time Remaining  :" + seconds + " Seconds";
        timer = setTimeout("displayCounter()", 1000);
    } else {
        if (parseInt(seconds) == 0) {
            minutes = parseInt(minutes) - 1;
            document.getElementById("displayCounter").innerHTML = "<strong>Your Left Time is :</strong>" + seconds + "<strong> Seconds</strong>";
            if (parseInt(minutes) == 0) {
                clearTimeout(timer);
                alert("Time Up");
                window.location.href = "index.html";
            }
        }
    }
}

