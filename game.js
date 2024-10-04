let random = parseInt(Math.random()*100+1)


const Input = document.querySelector('#userInput')
const submitButton = document.querySelector('#submit')
const previous = document.querySelector('.prevguess')
const rem = document.querySelector('.remaining')
const result = document.querySelector('.result')
const p = document.createElement('p');
const startOver = document.querySelector('.resultpara')
const restart = document.querySelector('#newGame');

let numGuess = 1;
let playGame = true;

if(playGame)
{
    submitButton.addEventListener('click',function(e){
         e.preventDefault();
         const guess = parseInt(Input.value)
         validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess<0||guess>100||isNaN(guess)){
        displayMessage("Please enter a valid input")
    }
    else {
    if(numGuess==10)
    {
        displayGuess(guess)
        displayMessage(`GAME OVER!!...Random number was ${guess}`)
        endGame()
    }

    else{
        displayGuess(guess)
        checkGuess(guess)
    }   
}   
}

function checkGuess(guess)
{
    if(guess==random)
    {
        displayMessage("You guesses it right")
        endGame();
    }

    else if(guess<random)
    {
        displayMessage("Guess is too low")
    }

    else if(guess>random)
    {
        displayMessage("Guess is too high")
    }
}

function displayGuess(guess)
{      
    userInput.value = ''
      previous.innerHTML = guess
      numGuess++
      rem.innerHTML = `${11-numGuess}`
}

function displayMessage(e){
    result.innerHTML = e
}

function newGame() {
    
    restart.addEventListener('click', function (e) {
        Input.removeAttribute('disabled','');
      random = parseInt(Math.random() * 100 + 1);
      numGuess = 1;
      previous.innerHTML = '';
      result.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`;
    
      playGame = true;
    });
  }
  
  function endGame() {
    Input.value = '';
    Input.setAttribute('disabled','');
    playGame = false;
    newGame();
  }