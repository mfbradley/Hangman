var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersSoFar = [];
var wordBlanks = [];
var commas = [];

var wordArray = ["grand canyon", "zion", "yellowstone", "yosemite"];
var wordToGuess;
var userGuess;

// computer picks a random word from the word array
// user guesses a letter 
// if that letter is in the word...
    // show the letter
    // guessesRemaining--
// if that letter is not in the word
    // add letter to lettersSoFar array
    // guessesRemaining--




$(document).ready(function () {
    if (guessesRemaining === 10) {
        var wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordToGuess);

        for (var i = 0; i < wordToGuess.length; i++) {
            commas.push("_");
        }

        wordBlanks = commas.join(" ");
        console.log('blanks: ' + wordBlanks);
        console.log('commas: ' + commas)
    }

    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);

        lettersSoFar.push(userGuess);
        console.log(lettersSoFar);

        if (lettersSoFar.indexOf(userGuess) ) {
            guessesRemaining--;
            console.log(guessesRemaining);
        }

        else {
            alert("you already guessed that letter");
        }

       
        


    }




});