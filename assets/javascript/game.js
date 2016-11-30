var wordList = ["cat", "dog", "bird"]

var word1 = "";
var word1Chars = [];
var wordToDisplay = [];
var guessedLetters = [" "];
var guessesLeft = 14;
var wins = 0;


//Counts down guesses
function remainingGuesses() {
	guessesLeft = guessesLeft - 1
	return guessesLeft
}


//Starts initial game and new rounds
var startGame = function() {
	word1 = wordList[Math.floor(Math.random() * wordList.length)];
	word1Chars = word1.split("");
	wordToDisplay = [];
	guessedLetters = [" "];
	guessesLeft = 14;
	for (i=0; i<word1.length; i++) {
		wordToDisplay.push("_");
	};
	document.getElementById('word').innerHTML = wordToDisplay.join("");
}


//If user wins, a win is scored
var win = function() {
	if (wordToDisplay.indexOf("_") < 0) {
		wins = wins + 1;
		return wins;
	}
}




startGame();

	//Key pressed to begin game 
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		//User's guess is pushed into the guessedLetters array to be printed on screen.
		guessedLetters.push(userGuess);
		document.getElementById('guessedLetters').innerHTML = guessedLetters.join("");

			//Checking if win or out of guesses
			if (guessesLeft > 0 && wordToDisplay.indexOf("_") > -1) {

				document.getElementById('guessesLeft').innerHTML = guessesLeft;

					//Checking if user's guess matches any letters of game word
					for (i=0; i<word1.length; i++) {
						if (userGuess === word1[i]) {
							wordToDisplay[i] = userGuess;
						}
					};


				remainingGuesses();
				win();

				document.getElementById('word').innerHTML = wordToDisplay.join("");
				console.log(guessedLetters);
				console.log(guessesLeft);
				document.getElementById('wins').innerHTML = wins;

			} //guessesLeft END
			else {
				startGame();
			}
	}; //keyUp END





//Potential code to prevent letters from being guessed twice & counted against in remaining Guesses
		// for (i=0; i<guessedLetters.length; i++) {
		// if (userGuess != guessedLetters[i]) {
		// 	guessedLetters.push(userGuess);
		// 	remainingGuesses();
		// }
		// };

//Possible future modifications:
	//*Do not allow letter to be printed multiple times in lettersGuessed
	//*Do not count against guesses if not a letter
	//*Press a specific key once for a new round &/OR button to start new round
	//*Play music if word is guessed
	//*Show image if word is guessed