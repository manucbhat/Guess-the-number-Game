//Generate a random number between 1 and 100.
let randomNumber = parseInt((Math.random()*100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHigh = document.querySelector('.lowOrHigh');
const p = document.querySelector('.p');
let previousGuesses =[];
let numGuesses = 1;
let playGame = true;

if(playGame){
    subt.addEventListener('click',function(e){
        e.preventDefault();
        //Grab Guess from User.
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(guess < 1){
        alert('Please Enter a Number Greater than 1!');
    }else if(guess > 100){
        alert('PLease Enter a Number Less Than 100!');
    }else{
        //Keep reccord of number of attempted guesses.
        previousGuesses.push(guess);
        //check to see if game is over.
        if(numGuesses<=10){
            displayGuesses(guess);
            displayMessage('Game Over!!! Number was ${randomNumber}');
            endGame();
        }else{
            //Display Previous guessed numbers.
            displayGuesses(guess);
            //check guess and display if wrong.
            checkGuess(guess);
        }
    }
}