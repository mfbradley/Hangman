var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersSoFar = [];
var wordBlanks = [];
var commas = [];
var lettersAndBlanks = [];

var wordArray = ["grand canyon", "zion", "yellowstone", "yosemite"];
var wordToGuess;
var userGuess;

$(document).ready(function () {
    // when game begins (if guesses left === 0)...
    // set wordToGuess to a random word in array
    // push blanks into commas array (array with commas)
    // remove commas and store in wordBlanks array
    // replace text in wordBlanksHere div with wordBlanks
    if (guessesRemaining === 10) {
        var wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordToGuess);

        for (var i = 0; i < wordToGuess.length; i++) {
            commas.push("_");
        }

        wordBlanks = commas.join(" ");
        console.log('blanks: ' + wordBlanks);
        console.log('commas: ' + commas)

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

        if (lettersSoFar.indexOf(userGuess) < 0) {
            lettersSoFar.push(userGuess);
            

            guessesRemaining--;

            $(".lettersGuessedDiv").text(lettersSoFar);
        }

        else {
            alert("you already guessed that letter");
        }


        for (var i=0; i < wordBlanks.length; i++) {
                
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




});