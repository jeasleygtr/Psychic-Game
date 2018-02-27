// variable for w, l, guesses. Start at zero
var win = 0;
var lose = 0;
var guesses = 0;
var displayGuesses = [];

// the options array
var letterChoices = ["a", "b", "c", 
    "d", "e", "f", "g", "h", 
    "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", 
    "x", "y", "z"];

// Randomly chooses from the options array, aka venkman's card
var computerPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];

var reset = function() {
	guesses = 0;
	displayGuesses = [];
	computerPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];
};

// This function runs when the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(computerPick);

// restrics attempts to letters only

if (userGuess.length > 1 || !/[A-Z]/i.test(userGuess)){
	alert("Please type a letter!");
}

else if (userGuess === computerPick) {
	win++;
	reset();
	alert("Incredible! You can't see through the card can you?");
}

else {
	displayGuesses.push(userGuess);
	guesses++;
}

if (guesses === 10) {
	lose++;
	reset();
	alert("Sorry, this isn't your lucky day! BUZZZZZ!!!!")
}

var html =
	"<p>Wins: " + win + "</p>" +
	"<p>Letters already chosen: " + displayGuesses.join(' ') + "</p>" +
	"<p>Electric Shocks (Losses): " + lose + "</p>" +
	"<p>Attempts: " + guesses + "</p>" +
	"<p>Attempts left: " + (10 - guesses) + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
};