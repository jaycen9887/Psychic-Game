var key;
var wins = 0;
var losses = 0;
var guessesRemain = 10;
var guesses = "";
var cmp = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winCount = document.getElementById("wins");
var loseCount = document.getElementById("losses");
var guesscount = document.getElementById("guessesRemain");
var guessesMade = document.getElementById("guesses");

document.onkeyup = function(event) {
    key = event.key;
    
    if(guessesRemain > 1) {
        
        if (key.length === 1 && key.match(/[a-z]/i)) {

            if (!guesses.includes(key)) {
                guesses += (" " + key);
                guessesMade.textContent = guesses;
                if (checkGuess(key)) {
                    
                    wins++;
                    winCount.textContent = wins;
                    
                    playGame();
                }
                guessesRemain--;
                guesscount.textContent = guessesRemain;
            }
        }
        
    } else {
        
        losses++;
        loseCount.textContent = losses;
        
        playGame();
    }
    
}

var randomLetter = function() {
    var max = letters.length;
    var random = Math.floor(Math.random() * (max - 0) + 0);
    
    return letters[random];    
}

var checkGuess = function(guess) {
    if (guess === cmp){
        return true;
    }else {
        return false;
    }
}


var playGame = function(){
    cmp = randomLetter();
    resetGame();
}

var resetGame = function() {
    
    guessesRemain = 10;
    guesses = "";
    
    winCount.textContent = wins;
    loseCount.textContent = losses;
    guesscount.textContent = guessesRemain;
    guessesMade.textContent = guesses;
}


playGame();