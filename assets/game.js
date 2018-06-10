// VARIABLES
var wins = 0;
var losses = 0;

var lettersSoFar = [];
var wordBlanks = [];
var commas = [];
var lettersAndBlanks = [];

var wordArray = ["grand canyon", "zion", "yellowstone", "yosemite"];
var wordToGuess;
var userGuess;
var letter = ""

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function resetGame() {
    guessesRemaining = 10;
    lettersSoFar = [];
    wordBlanks = [];
    commas = [];
    lettersAndBlanks = [];

}

// LOGIC
for (var i = 0; i < alphabet.length; i++) {
    var button = $("<button type='button' class='btn btn-light' data-value='" + alphabet[i] + "'></button>");
    button.text(alphabet[i]);

    if (i < 4) {
        $(".buttonsDiv1").append(button);
    }
    else if (i >= 4 && i < 9) {
        $(".buttonsDiv2").append(button);
    }
    else if (i >= 9 && i < 15) {
        $(".buttonsDiv3").append(button);
    }

    else if (i >= 15 && i < 20) {
        $(".buttonsDiv4").append(button);
    }

    else {
        $(".buttonsDiv5").append(button);
    }
}


$(document).ready(function () {
    var guessesRemaining = 10;

    $(".guessesRemaining").text(guessesRemaining);
    // when game begins (if guesses left === 0)...
    // set wordToGuess to a random word in array
    // push blanks into commas array (array with commas)
    // remove commas and store in wordBlanks array
    // replace text in wordBlanksHere div with wordBlanks
    if (guessesRemaining === 10) {
        var wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];

        for (var i = 0; i < wordToGuess.length; i++) {
            commas.push("_");
        }

        wordBlanks = commas.join(" ");
        $(".wordBlanksHere").text(wordBlanks);
    }


    // when user presses a letter
    // set up event listener
    // set userGuess = key
    // if the userGuess is not already in the letters guessed so far, push the user guess into the lettersSoFar array
    // guessesRemaining--
    // replace text of lettersGuessedDiv with lettersSoFar array
    // loop over wordToGuess and see if the user guess matches any of the letters in the word

    document.onkeyup = function (event) {

        var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        if (alphabet.includes(userGuess)) {
            if (lettersSoFar.indexOf(userGuess) < 0) {
                guessesRemaining -= 1;
                $(".guessesRemaining").text(guessesRemaining);
                lettersSoFar.push(userGuess);
                $(".lettersGuessedDiv").text(lettersSoFar);
            }

            else {
                alert("you already guessed that letter");
            }

            if (guessesRemaining === 0) {
                guessesRemaining = 10;
                $(".guessesRemaining").text(guessesRemaining);
                lettersAndBlanks = [];
            }


            for (var i = 0; i < wordBlanks.length; i++) {

                if (userGuess != wordToGuess[i] && lettersAndBlanks[i] != wordToGuess[i]) {
                    lettersAndBlanks[i] = "_";
                }

                else if (userGuess === wordToGuess[i]) {
                    lettersAndBlanks[i] = wordToGuess[i];
                    console.log(lettersAndBlanks);
                }


            }

            var noCommas = lettersAndBlanks.join(" ");
            $(".wordBlanksHere").text(noCommas);




        }
    }



});