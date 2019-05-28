//word lists or arrays
let wordLists = [
    "won",
    "computer",
    "command",
    "conditionals",
    "debugging",
    "function",
    "iteration",
    "Parameter",
    "programming",
    "variable",
    "event",
    "algorithm",
    "bootcamp",
    "compiler",
    "framework",
    "javascrpit",
    "jquery",
    "mongodb",
    "python",
    "server",
    "terminal"
];
//variables
    var maxTries = 10; 
    var secretWord = "";       
    var currentWordLists = [];
    var remainingGuesses = 0;  
    var guessingWords = [];          
    var wrongLetter = [];           

//game country   
var wins = 0;   
var losses = 0;

//function
function startGame () {
    secretWord = wordLists[Math.floor(Math.random() * wordLists.length)]; 
    currentWordLists = secretWord.split("");
    remainingGuesses = currentWordLists.length;

    // this resets the game
    wrongLetter = [];
    guessingWords = [];
    maxTries = 10; 

    //pupulate remmaining guesses and guessing words

    for (var i = 0; i < remainingGuesses; i++) {
        guessingWords.push("_");

    }
    // change html tp reflect round condtions
         document.getElementById("wordGuess").innerHTML = guessingWords.join(" ");
         document.getElementById("guessesLeft").innerHTML =maxTries;
         document.getElementById("countWins").innerHTML = wins;
         document.getElementById("countLoss").innerHTML = losses;
//testing
        console.log (secretWord);
        console.log(currentWordLists);
        console.log(remainingGuesses);
        console.log(guessingWords);
} 
//this function compere the letter user typing with the arrays
        function chkLetters(letter) {
         var isLetInWord = false;  
          //this checks if the letter is in the array
         for (var i = 0; i < remainingGuesses; i++) {
             if(secretWord[i] === letter) {
                 isLetInWord = true;
     }
        
 } 
 // this check if the letter in words and if its there then it populate out  wordlists array.
         if(isLetInWord) {  
            for (var i = 0; i <remainingGuesses; i++) {
                if(secretWord[i] === letter) {
                    guessingWords[i] = letter;
            }
        } 
    }
        else {
            wrongLetter.push(letter);
            maxTries--
    }
         console.log(guessingWords);
}

    function roundComplete() {
        console.log("Count Wins: " + wins + " | Count Loss: "  + losses + " | Remaining Guess" + maxTries);
    //this block of code will run if the user won the game
    
         if (currentWordLists.toString() == guessingWords.toString()) {
             wins++;
             var wonGame = document.getElementById('winner');
             wonGame.innerHTML = 'CONGRATS!! YOU WON. To start new game, Please press any key.';
             wonGame.style.color = 'green';
             wonGame.style.fontWeight = 'bold';
           // alert("We Got The Winner!");

        // this will updates the html
             document.getElementById("countWins").innerHTML = wins;
             startGame();
    }
        else if(maxTries == 0) {
            losses++;
         var gameOver =   document.getElementById('game-over');
        gameOver.innerHTML = 'SORRY YOU LOST! To try again, Please press any key!';
        gameOver.style.color = 'red';
        gameOver.style.fontWeight = "bold";
           // alert("Sorry! You Lost!");

     // this will updates the html
        document.getElementById("countLoss").innerHTML = losses;
        startGame();
    }
        // this will updates the html

        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("wordGuess").innerHTML = guessingWords.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");

}

//main process bellow here 
startGame();
//key event

    document.onkeyup = function(event) {
        var guessedLtr = event.key;
         chkLetters(guessedLtr);
         document.getElementById('game-over').innerHTML = '';
         document.getElementById('winner').innerHTML = '';
         roundComplete();

    //test the code
        console.log(guessedLtr);
} 

