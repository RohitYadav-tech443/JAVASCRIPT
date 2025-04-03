let randomnumber = parseInt(Math.random() * 100 + 1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;
 
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);        
        validateGuess(guess);

    });
}
function validateGuess(guess){
//  validates whether value is btw 1 to 100 and is valid
 if(isNaN(guess)){
    alert('Please enter a valid number');
 }
 else if(guess<1){
    alert('Please enter a valid number');
 }
 else if(guess>100){
    alert('Please enter the valid number');
 }
 else{
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomnumber} `);
        endGame();
        return;
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
 }
}
function checkGuess(guess){
    // checks when vaalue gets equal to random value
    if(guess === randomnumber){
        displayMessage('You guessed it right');
        endGame();
    }
    else if(guess<randomnumber){
        displayMessage('number is too low');
    }
    else if(guess>randomnumber){
        displayMessage('number is too high');
    }
}
function displayGuess(guess){
// changes values everytime after one input and updates the array prevguess
 userInput.value='';
 guessSlot.innerHTML += `${guess}, `;
 numGuess++;
 remaining.innerHTML=`${11-numGuess}`;

}

function displayMessage(message){
// displays the messages
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame()
}
function newGame(){
   const newGameButton=document.querySelector('#newGame');
   newGameButton.addEventListener('click',function(e){
    randomnumber=parseInt(Math.random()*100 +1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame=true;
   });
}