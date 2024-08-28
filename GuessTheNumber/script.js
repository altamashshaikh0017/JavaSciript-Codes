// let random= parseInt(Math.random()*100+1);
//   console.log(random);
// const submit = document.querySelector('#submit')
// const userINput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')
// const p = document.createElement('p');
// let pervGuess=[];
// let numGuess=1

// let playGame= true;
// if(playGame){
//         submit.addEventListener('click',function(e){
//          e.preventDefault();
//           const guess=parseInt(userINput.value)
//           console.log(guess);
//           validateGuess(guess);
//         });
//     }
// function validateGuess(guess){
// if(isNaN(guess)){
//     alert('Please enter a valid number')
// }else if(guess<1){
//     alert('Please enter a number greater than 1')
// }else if(guess>100){
//     alert('Please enter a  number less than 100')
// }else{
//     pervGuess.push(guess);
//     if(numGuess===11){
//     displayGuess(guess);
//     displayMessage(`Game Over. Random Number was ${random}`)
//     endGame();
//     }else{
//       displayGuess(guess);
//       checkGuess(guess);
//     }
// }
//  }
// function checkGuess(guess){
//     if(guess===random){
//         displayMessage('You Guessed it Right');
//         endGame();
//     }else if(guess<random){
//         displayMessage('Number Is Too Low')
//     }else if(guess>random){
//         displayMessage('Number Is Too High')
//     }

// }

// function displayGuess(guess){
//     userINput.value='';
//     guessSlot.innerHTML += `${guess}, `;
//     numGuess++;
//     remaining.innerHTML = `${11-numGuess}`
// }
// function displayMessage(message){
//  lowOrHi.innerHTML = `<h2>${message}</h2>`

// }
// function endGame() {
//     userINput.value='';
//     userINput.setAttribute('disabled','');
//     p.classList.add('button');
//     p.innerHTML = '<h2 id ="newGame">Start New Game</h2>'
//     startOver.appendChild(p);
//     playGame=false;
//     newGame();
// }
// function newGame(){
// const newGameButton = document.querySelector('#newGame');
//    newGameButton.addEventListener('click',function(e){
//    random= parseInt(Math.random()*100+1);
//    pervGuess=[];
//    numGuess=1;
//    guessSlot.innerHTML= '';
//    remaining.innerHTML=`${11-numGuess}`;
//    userINput.removeAttribute('disabled');
//    startOver.removeChild(p);
//     playGame=true;
//    })
// }


//--------------------------*********************---------------------------------

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('COngratulations, You Guessed it Right');
    endGame();
  }
  if (guess < randomNumber) {
    displayMessage('Number Too Low');
  }
  if (guess > randomNumber) {
    displayMessage('Number Too High');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML = '';
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame = true;
  });
}
