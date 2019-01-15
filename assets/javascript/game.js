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
var wordArray = ["gla cier", "zio n", "yellow stone", "yose mite", "olym pic", "red wood", "seq uoia", "canyon lands", "ba dlands"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// reset game - set guesses back to 10, empty arrays, and replace html text to reflect that
function resetGame() {
    guessesRemaining = 10;
    lettersSoFar = [];
    wordBlanks = [];
    commas = [];
    lettersAndBlanks = [];
    $(".lettersGuessedDiv").text("");
    $(".guessesRemaining").text(guessesRemaining);
}

// used on document.ready to show guesses remaining when page loads
function setGuessesRemaining() {
    $(".guessesRemaining").text(guessesRemaining);
}

// select random word to guess from wordArray and push blanks into wordBlanks array and replace text to show blanks
function setRandomWord() {
    if (guessesRemaining === 10) {
        wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log(wordToGuess);

        for (var i = 0; i < wordToGuess.length; i++) {
            console.log(wordToGuess[i])
            if (wordToGuess[i] != " ") {
                commas.push("_");

            }
            else {
                commas.push(" ")
                console.log("space")
            }
        }
        console.log("commas " + commas)
    }
    wordBlanks = commas.join("");
    console.log(wordBlanks)
    $(".wordBlanksHere").text(wordBlanks);
}

// if the user has not guessed the letter yet, push it to the lettersSoFar div and update DOM
// if the user has already guessed that letter, notify them
function updateLettersGuessed() {
    if (lettersSoFar.indexOf(userGuess) < 0) {
        guessesRemaining--;
        setGuessesRemaining();
        lettersSoFar.push(userGuess);
        $(".lettersGuessedDiv").text(lettersSoFar);
    }

    else {
        alert("you already guessed that letter");
    }
}

// compare userGuess with letters in the wordToGuess - set letters and blanks accordingly
function checkAndShowLetter() {
    for (var i = 0; i < wordBlanks.length; i++) {
        console.log(wordBlanks[i])
        if (userGuess != wordToGuess[i] && lettersAndBlanks[i] != wordToGuess[i] && wordBlanks[i] != " ") {
            lettersAndBlanks[i] = "_";
        }
        
        else if (wordBlanks[i] === " ") {
            lettersAndBlanks[i] = " ";
        }
        else {
            lettersAndBlanks[i] = wordToGuess[i];
            console.log(lettersAndBlanks);
        }
    }
    console.log("l&b " + lettersAndBlanks)

    var noCommas = lettersAndBlanks.join("");
    $(".wordBlanksHere").text(noCommas);
}



// LOGIC
// create buttons for each letter of the alphabet and append to R side of DOM
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

    if (wordToGuess === "glacier") {

    }
    document.onkeyup = function (event) {

        userGuess = event.key.toLowerCase();

        if (alphabet.includes(userGuess)) {

            updateLettersGuessed();

            if (guessesRemaining === 0) {
                resetGame();
            }

            checkAndShowLetter();

            if (lettersAndBlanks.indexOf("_") < 0) {
                resetGame();
                setRandomWord();
                alert("you win!");
            }
        }
    }

    $(document).on("click", ".btn", function () {
        var letter = $(this).attr("data-value");
        userGuess = letter;

        if (alphabet.includes(userGuess)) {
            updateLettersGuessed();

            if (guessesRemaining === 0) {
                resetGame();
            }

            checkAndShowLetter();

            if (lettersAndBlanks.indexOf("_") < 0) {
                resetGame();
                setRandomWord();

                alert("you win!");
            }
        }
    });
});

