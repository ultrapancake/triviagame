//Questions object

var questionsObject = {
    q1: {
        q: "What weight class is 145 lbs?",
        posibAns: ["125 lbs", "145 lbs", "160 lbs", "205 lbs"],
        ans: "145 lbs",
        imageLoc: "assets/images/welterweight.gif"

    },
    q2: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q3: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q4: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q5: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q6: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q7: {
        q: "Who is the oldest heavyweight champion of all time?",
        posibAns: ["Lennox Lewis", "Muhammad Ali", "George Foreman", "Joe Frazier"],
        ans: "George Foreman",
        imageLoc: "assets/images/oldest.gif"
    },
    q8: {
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
        clearInterval(intervalId)
    }
}
