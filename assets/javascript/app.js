$(document).ready(function(){
    //Questions object


var questionsObject = {
    "1": {
        q: "What weight class is Welterweight?",
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
        q: "Who was the first gloved heavyweight champion?",
        posibAns: ["Rocky Marciano", "John L. Sullivan", "Jack Dempsey", "Joe Lewis"],
        ans: "John L. Sullivan",
        imageLoc: "assets/images/john-l-sullivan.jpg"
    },
    "4": {
        q: "In 1957 Sugar Ray Robinson threw a left hook that boxing critics have referred to as the perfect left hook. Who recieved this devistating punch?",
        posibAns: ["Gene Fullmer", "Roberto Duran", "Willie Pep", "Jake LaMotta"],
        ans: "Gene Fullmer",
        imageLoc: "assets/images/ray-robinson.gif"
    },
    "5": {
        q: "Who is the first Mexican boxer to win a world heavyweight title?",
        posibAns: ["Canelo Alvarez", "Julio Cesar Chavez", "Andy Ruiz Jr.", "Juan Manuel Marquez"],
        ans: "Andy Ruiz Jr.",
        imageLoc: "assets/images/andy-ruiz-jr.gif"
    },
    "6": {
        q: "Who is the longest reigning boxing world champion in any weight class?",
        posibAns: ["Joe Louis", "Wladimir Klischko", "Andre Ward", "Takashi Uchiyama"],
        ans: "Joe Louis",
        imageLoc: "assets/images/joe-louis.png"
    },
    "7": {
        q: "How many rounds was the longest gloved boxing match in history?",
        posibAns: ["25 rounds", "200 rounds", "110 rounds", "78 rounds"],
        ans: "110 rounds",
        imageLoc: "assets/images/exhausted.gif"
    },
    "8": {
        q: "Who was the youngest world champion ever at just 17 years old?",
        posibAns: ["Naoya Inoue", "Mike Tyson", "Floyd Mayweather Jr.", "Wilfred Benitez"],
        ans: "Wilfred Benitez",
        imageLoc: "assets/images/wilfred-benitez.gif"
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
        displayQuestion()
        $("#questionNumber").html(qCounter);
    }, 3000);
    $(".question").text("Times Up!!");
    $("#answers").html("<h2>Correct answer was " + rightAns + "</h2>");
    var imgDisplay = $("<img>");
    imgDisplay.attr("src", "assets/images/timer.gif");
    $("#answers").append(imgDisplay);


}

function decrement() {
    timeLeft--;
    $("#timeLeft").html(timeLeft)

    if (timeLeft === 0) {
        stop();
        endTimer();
    }
}

// function for grabing the questions from the question object
function displayQuestion() {
    emptyDiv();
    if (qCounter === 9) {
        consoleLog();
        gameReset();

    } else {
        var curQ = questionsObject[qCounter].q;

        var answer = questionsObject[qCounter].posibAns;
        console.log(questionsObject[qCounter].posibAns)
        // global variables
        rightAns = questionsObject[qCounter].ans;

        qImg = questionsObject[qCounter].imageLoc;
        console.log(curQ)
        console.log(answer)
        console.log(rightAns)
        console.log(qImg)

        // For loop to go through questions
        for (i = 0; i < answer.length; i++) {
            var answerDiv = $("<div>");
            var h2 = $("<h2>");
            h2.addClass("answer-generated");
            h2.attr("data-value", answer[i]);
            h2.text(answer[i]);

            answerDiv.append(h2);

            // push to HTML
            $("#answers").append(answerDiv);

        }
        // push to HTMl
        $(".question").html(curQ);
        qTimer();
        console.log(curQ);
        // Onclick event
        $(".answer-generated").on("click", function(){
            var ansClick = $(this).attr("data-value");
            if (ansClick === rightAns){
                qCounter++;
                rightGuess();
                setTimeout(function () {
                    displayQuestion()
                    $("#questionNumber").html(qCounter);
                }, 5000);
            } else {
                qCounter++;
                wrongGuess();
                setTimeout(function(){
                    displayQuestion()
                    $("#questionNumber").html(qCounter);
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
    $("#answers").append("<h2>The Correct answer was " + rightAns + "</h2>");
    var imgDisplay = $("<img>");
    imgDisplay.attr("src", "assets/images/lose.gif");
    $("#answers").append(imgDisplay);
}

// console log function
function consoleLog() {
    console.log(guessRight);
    console.log(guessWrong);
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
        displayQuestion();
        $("#questionNumber").html(qCounter);
    })
};

// game reset function
function gameReset() {
    // Alerts player that game is over
    $(".question").text("Game Over");
    // Final Score
    $("#outcome").append("<p> Correctly Guessed: " + guessRight + "</p>");

    $("#outcome").append("<p> Incorreclty Guessed: " + guessWrong + "</p>");

    $("#outcome").append("<p> Unanswered Questions: " + noGuess + "</p>");
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
        displayQuestion();
        $("#questionNumber").html(qCounter);
    })
};
// empty text function so that i can empty and push inside function
function emptyDiv(){
    $("#answers").empty();
    $(".question").empty();
    $("#outcome").empty();
    $("#questionNumber").empty();
}
gameLoad();
})