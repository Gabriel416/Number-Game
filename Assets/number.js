var magicNumber = Math.floor(Math.random() * 150 + 1) + 70;
var iconNumber1 =  Math.floor(Math.random() * 20 + 10);
var iconNumber2 =  Math.floor(Math.random() * 5) + 1;
var iconNumber3 =  Math.floor(Math.random() * 20 + 1) + 5;
var score = 0;
var wins = 0;
var losses = 0;

//Assigning the magic number to match.
$(".magic").html("The magic number to match is: " + magicNumber);

//function to reset game on win or loss.
function reset() {
	magicNumber = Math.floor(Math.random() * 150 + 1) + 65;
	iconNumber1 =  Math.floor(Math.random() * 20 + 10);
	iconNumber2 =  Math.floor(Math.random() * 5) + 1;
	iconNumber3 =  Math.floor(Math.random() * 20 + 1) + 5;
	score = 0;
}
 
 //whenever a logo is clicked, add the randomly generated number to overall score.

$("#logo1").click(function bunny() {
	score += iconNumber1;
	document.getElementById("score").innerHTML = "Your current score: " + score;
})

$("#logo2").click(function wand() {
	score+= iconNumber2;
	document.getElementById("score").innerHTML = "Your current score: " + score;
})

$("#logo3").click(function wizard() {
	score += iconNumber3;
	document.getElementById("score").innerHTML = "Your current score: " + score;
})


//If the score equals the magic number to match, add a win and reset the game. If score goes over magic number add a loss and reset game.
if(score === magicNumber) {
	wins++;
	alert("Congrats you did it!");
	reset();
} 

 if (score > magicNumber) {
	losses++;
	alert("Sorry, better luck next time");
	reset();
}

	document.getElementById('win').innerHTML = "Wins: " + wins;
    document.getElementById('loss').innerHTML = "losses: " + losses;

