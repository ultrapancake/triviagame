//Questions object

var questionsObject = {
    "1": {
        q: "What weight class is 145 lbs?",
        posibAns: ["125 lbs", "145 lbs", "160 lbs", "205 lbs"],
        ans: "145 lbs",
        imageLoc: "assets/images/welterweight.gif"

    },
    "2": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "3": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "4": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "5": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "6": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "7": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    "8": {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    }

};

//Global Var
var guessRight = 0;
var guessWrong = 0;
var noGuess = 0;

var timeLeft = 20;
var intervalId;
var qCounter = 1;

var rightAns = "";
var qImg = "";

//Timer
function qTimer() {
    clearInterval(intervalId)
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    $("#PLACEHOLDER").html(timeLeft)

    if (timeLeft === 0) {
        stop()
    }
}

// function for grabing the questions from the question object
function displayQuestion(x) {
    if (qCounter === 4) {
        consoleLog()

    } else {
        var curQ = questionsObject[x].q

        var answer = questionsObject[x].possibleAnswers;

        // global variables
        rightAns = questionsObject[x].answer;

        qImg = questionsObject[x].answer;

        // For loop to go through questions
        for (i = 0; i < answer.length; i++) {
            var answerDiv = $("<div>");
            var h2 = $("<h2>");
            h2.addClass("answer-generated")
            h2.val(answer[i])
            h2.text(answer[i])

            answerDiv.append(h1)

            // push to HTML
            $("#PLACEHOLDER-answer").append(answersDiv)

        }
        // push to HTMl
        $(".PLACEHOLDER-question").html(curQ)
    }
};

//function to evaluate the correct guess
function rightGuess() {
    guessRight++
    stop()
    timeLeft = 20
    $("#timeLeft").html(timeLeft)
    $("#answers").empty()
    $(".question").empty()

}
// function for wrong guess
function wrongGuess() {
    guessWrong++
    stop()
    timeLeft = 20
    $("#timeLeft").html(timeLeft)
    $("#answers").empty()
    $(".question").empty()
}

// console log function
function consoleLog() {
    console.log(guessedCorrect);
    console.log(guessedInncorect);
    console.log(noGuessAnswers);
};

// stop function to call in different locations
function stop() {
    clearInterval(intervalId)
};

// run function and pass object through as parameter
function gameLoad() {
    var startButton = $("<h2>");
    startButton.addClass("startButton");
    startButton.text("Start")
    $("#answers").append(startButton)
    $(".startButton").on("click", function () {
        $("#answers").empty();
        displayQuestion(qCounter);
    })};

// game reset function
function gameReset(){
    $("question").text("Game Over");
    var startButton = $("<h2>");
    startButton.addClass("startButton");
    startButton.text("Reset Game");
    $("#answers").append(startButton)
    $(".startButton").on("click", function () {
        $("#answers").empty();
        guessRight = 0
        guessWrong = 0
        qCounter = 1
        noGuess = 0
        displayQuestion(qCounter);
}