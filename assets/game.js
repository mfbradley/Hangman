// VARIABLES
var wins = 0;
var losses = 0;
var wordToGuess;
var userGuess;
var guessesRemaining = 10;

var lettersSoFar = [];
var wordBlanks = [];
var commas = [];
var lettersAndBlanks = [];
var wordArray = ["grand canyon", "zion", "yellowstone", "yosemite"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function resetGame() {
    guessesRemaining = 10;
    lettersSoFar = [];
    wordBlanks = [];
    commas = [];
    lettersAndBlanks = [];

}

function setGuessesRemaining() {
    $(".guessesRemaining").text(guessesRemaining);
}

function setRandomWord() {
    if (guessesRemaining === 10) {
        wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordToGuess);

        for (var i = 0; i < wordToGuess.length; i++) {
            commas.push("_");
        }
    }
    wordBlanks = commas.join(" ");
    $(".wordBlanksHere").text(wordBlanks);
}


// LOGIC
// create buttons
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

    setGuessesRemaining();
    setRandomWord();



    document.onkeyup = function (event) {

        var userGuess = event.key.toLowerCase();

        if (alphabet.includes(userGuess)) {
            if (lettersSoFar.indexOf(userGuess) < 0) {
                guessesRemaining--;
                $(".guessesRemaining").text(guessesRemaining);
                lettersSoFar.push(userGuess);
                $(".lettersGuessedDiv").text(lettersSoFar);
            }

            else {
                alert("you already guessed that letter");
            }

            if (guessesRemaining === 0) {
                lettersSoFar = [];
                $(".lettersGuessedDiv").text("");
                guessesRemaining = 10;
                $(".guessesRemaining").text(guessesRemaining);
                lettersAndBlanks = [];
                wordBlanks = [];
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

            if (lettersAndBlanks.indexOf("_") < 0) {
                guessesRemaining = 10;
                $(".guessesRemaining").text(guessesRemaining);
                lettersSoFar = [];
                $(".lettersGuessedDiv").text(lettersSoFar);
                wordBlanks = [];
                commas = [];

                lettersAndBlanks = [];
                wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
                for (var i = 0; i < wordToGuess.length; i++) {
                    console.log(i)

                    commas.push("_");


                }
                wordBlanks = commas.join(" ");
                $(".wordBlanksHere").text(wordBlanks);

                alert("you win!");
            }





        }
    }

    $(document).on("click", ".btn", function () {
        var letter = $(this).attr("data-value");
        console.log(letter);

        var userGuess = letter;

        if (alphabet.includes(userGuess)) {
            if (lettersSoFar.indexOf(userGuess) < 0) {
                guessesRemaining--;
                $(".guessesRemaining").text(guessesRemaining);
                lettersSoFar.push(userGuess);
                $(".lettersGuessedDiv").text(lettersSoFar);
            }

            else {
                alert("you already guessed that letter");
            }

            if (guessesRemaining === 0) {
                lettersSoFar = [];
                $(".lettersGuessedDiv").text("");
                guessesRemaining = 10;
                $(".guessesRemaining").text(guessesRemaining);
                lettersAndBlanks = [];
                wordBlanks = [];
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

            if (lettersAndBlanks.indexOf("_") < 0) {
                guessesRemaining = 10;
                $(".guessesRemaining").text(guessesRemaining);
                lettersSoFar = [];
                $(".lettersGuessedDiv").text(lettersSoFar);
                wordBlanks = [];
                commas = [];

                lettersAndBlanks = [];
                wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
                for (var i = 0; i < wordToGuess.length; i++) {
                    console.log(i)

                    commas.push("_");


                }
                wordBlanks = commas.join(" ");
                $(".wordBlanksHere").text(wordBlanks);

                alert("you win!");
            }





        }

    });

});

// if all letters are full user wins
// if word to guess matches the letters and blanks array user wins
