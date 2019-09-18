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
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function endTimer() {
    noGuess++;
    stop();
    timeLeft = 20;
    $("#timeLeft").html(timeLeft);
    $("#answers").empty();
    $(".question").empty();
    qCounter++;
    setTimeout(function () {
        displayQuestion(qCounter)
    }, 3000);
    $(".question").text("Times Up!!");
    $("#answers").html("<h2>correct answer was " + correctAnswer + "</h2>");


}

function decrement() {
    timeLeft--;
    $("#PLACEHOLDER").html(timeLeft)

    if (timeLeft === 0) {
        stop();
        endTimer();
    }
}

// function for grabing the questions from the question object
function displayQuestion(x) {
    emptyDiv();
    if (qCounter === 8) {
        consoleLog();
        gameReset();

    } else {
        var curQ = questionsObject[x].q;

        var answer = questionsObject[x].possibleAnswers;

        // global variables
        rightAns = questionsObject[x].answer;

        qImg = questionsObject[x].answer;

        // For loop to go through questions
        for (i = 0; i < answer.length; i++) {
            var answerDiv = $("<div>");
            var h2 = $("<h2>");
            h2.addClass("answer-generated");
            h2.val(answer[i]);
            h2.text(answer[i]);

            answerDiv.append(h1);

            // push to HTML
            $("#PLACEHOLDER-answer").append(answersDiv);

        }
        // push to HTMl
        $(".PLACEHOLDER-question").html(curQ);
        qTimer();
        // Onclick event
        $("answer-generated").on("click", function(){
            var ansClick = $(this).val();
            if (ansClick === ans){
                qCounter++;
                rightGuess();
                setTimeout(function () {
                    displayQuestion(qCounter)
                }, 3000);
            } else {
                qCounter++;
                wrongGuess();
                setTimeout(function(){
                    displayQuestion(qCounter)
                }, 3000);
            }
        })

    }
};

//function to evaluate the correct guess
function rightGuess() {
    guessRight++;
    stop();
    timeLeft = 20;
    $("#timeLeft").html(timeLeft);
    emptyDiv();
    $(".question").text("Right!");
    var imgDisplay = $("<img>");
    imgDisplay.attr("src", qImg);
    $("#answers").append(imgDisplay);

}
// function for wrong guess
function wrongGuess() {
    guessWrong++;
    stop();
    timeLeft = 20;
    $("#timeLeft").html(timeLeft);
    emptyDiv();
    $(".question").text("Wrong");
    $("#answers").html("<h2>The Correct answer was " + ans + "</h2>");
}

// console log function
function consoleLog() {
    console.log(guessedRight);
    console.log(guessedWrong);
    console.log(noGuess);
};

// stop function to call in different locations
function stop() {
    clearInterval(intervalId);
};

// run function and pass object through as parameter
function gameLoad() {
    var startButton = $("<h2>");
    startButton.addClass("startButton");
    startButton.text("Start");
    $("#answers").append(startButton);
    $(".startButton").on("click", function () {
        emptyDiv();
        displayQuestion(qCounter);
    })
};

// game reset function
function gameReset() {
    // Alerts player that game is over
    $("question").text("Game Over");
    // Final Score
    $("#answers").append("<p> Correctly Guessed: " + guessedCorrect + "</p>");

    $("#answers").append("<p> Incorreclty Guessed: " + guessedInncorect + "</p>");

    $("#answers").append("<p> Unanswered Questions: " + noGuessAnswers + "</p>");
    // Dynamically create reset game button with same styling as start button
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
    })
};
// empty text function so that i can empty and push inside function
function emptyDiv(){
    $("#answers").empty();
    $(".question").empty();
}
gameLoad();