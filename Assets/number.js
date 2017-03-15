var magicNumber = Math.floor(Math.random() * 150 + 1) + 70;
var iconNumber1 = Math.floor(Math.random() * 20 + 10);
var iconNumber2 = Math.floor(Math.random() * 2) + 1;
var iconNumber3 = Math.floor(Math.random() * 20 + 1) + 5;
var score = 0;
var wins = 0;
var losses = 0;

//Assigning the magic number to match.
$("#magic").html("The magic number to match is: " + magicNumber);

//function to reset game on win or loss.
function reset() {
    magicNumber = Math.floor(Math.random() * 150 + 1) + 65;
    document.getElementById('magic').innerHTML = "The magic number to match is: " + magicNumber;
    iconNumber1 = Math.floor(Math.random() * 20 + 10);
    iconNumber2 = Math.floor(Math.random() * 5) + 1;
    iconNumber3 = Math.floor(Math.random() * 20 + 1) + 5;
    score = 0;
}

//whenever a logo is clicked, add the randomly generated number to overall score.

$("#logo1").click(function bunny() {
    score += iconNumber1;
    document.getElementById("score").innerHTML = "Your current score: " + score;
    if (score === magicNumber) {
        wins++;
        reset();
        alert("congrats you have the magic touch");
    } else if (score > magicNumber) {
        losses++;
        reset();
        alert("sorry better luck next time");
    }
    document.getElementById('win').innerHTML = "Wins: " + wins;
    document.getElementById('loss').innerHTML = "losses: " + losses;

})

$("#logo2").click(function wand() {
    score += iconNumber2;
    document.getElementById("score").innerHTML = "Your current score: " + score;
    if (score === magicNumber) {
        wins++;
        reset();
        alert("congrats you have the magic touch");
    } else if (score > magicNumber) {
        losses++;
        reset();
        alert("sorry better luck next time");
    }
    document.getElementById('win').innerHTML = "Wins: " + wins;
    document.getElementById('loss').innerHTML = "losses: " + losses;

})

$("#logo3").click(function wizard() {
    score += iconNumber3;
    document.getElementById("score").innerHTML = "Your current score: " + score;
    if (score === magicNumber) {
        wins++;
        reset();
        alert("congrats you have the magic touch");
    } else if (score > magicNumber) {
        losses++;
        reset();
        alert("sorry better luck next time");
    }
    document.getElementById('win').innerHTML = "Wins: " + wins;
    document.getElementById('loss').innerHTML = "losses: " + losses;

})

