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
    }

}

//this function will randomize a number between 19-120 as the target number
function randomNumber() {
    targetNum = Math.floor(Math.random() * 120) + 19;
    $("#randomNumber").text(targetNum);
}

//function will load the application and start the randomization of numbers at page load
window.onload = function () {
    randomizeNumber();
    randomNumber();
    $("#score").text(score);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
}

//Adds a value to the score
function addToScore(number) {
    score += number;
    $("#score").text(score);
}

//Check if the player has won by reaching the target number
function winCheck() {
    if (score === targetNum) {
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    } else if (score > targetNum) {
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    }
}

//Reset the game
function resetGame() {
    randomizeNumber();
    randomNumber();
    score = 0;
    $("#score").text(score);
}

// On click function will assign value of each number in the array.
$("#crystal1").on("click", function () {
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

