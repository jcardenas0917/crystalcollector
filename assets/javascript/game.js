jQuery(document).ready(function () {
//set empty array for the each crystal number

var crystalNum = [];
var score = 0;
var targetNum = 0;
var wins = 0;
var losses = 0;

//this function will randomize the numbers between 1-12 for each crystal to hold
function randomizeNumber() {
    for (var i = 0; i < 4; i++) {
        crystalNum[i] = (Math.floor(Math.random() * 12) + 1);
        console.log(crystalNum);
    }

}

//this function will randomize a number between 19-120 as the target number
function randomNumber() {
    targetNum = Math.floor(Math.random() * 120) + 19;
    console.log(targetNum);
}

//function will load the application and start the randomization of numbers at page load
window.onload = function () {
    randomizeNumber();
    randomNumber();
}

//Adds a value to the score
function addToScore(number) {
    console.log(score);
    score += number;
    console.log(score);
    $("#score").text(score);
}

//Check if the player has won by reaching the target number
function winCheck() {
    if (score === targetNum) {
        wins++;
        console.log("Wins: " + wins);
        resetGame();
    } else if (score > targetNum) {
        losses++;
        console.log("Losses: " + losses);
        resetGame();
    }
}

function resetGame() {
    randomizeNumber();
    randomNumber();
    score = 0;
}

//this function will do the math and the run the game


// On click function will assign push the numbers to the screen 
$("#crystal1").on("click", function () {
    console.log("I clicked crystal 1");
    addToScore(crystalNum[0]);
    winCheck();
});

$("#crystal2").on("click", function () {
    addToScore(crystalNum[1]);
    winCheck();
});

$("#crystal3").on("click", function () {
    addToScore(crystalNum[2]);
    winCheck();
});

$("#crystal4").on("click", function () {
    addToScore(crystalNum[3]);
    winCheck();

});

});