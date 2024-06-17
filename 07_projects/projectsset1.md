# projects related to dom


## projectlink

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach(function(button)
{
  console.log(button);
  button.addEventListener('click',function(e)
  {
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey')
      {
        body.style.backgroundColor = e.target.id;
      }
      else if(e.target.id === 'white')
      {
        body.style.backgroundColor = e.target.id;
      }
      else if(e.target.id === 'blue')
      {
        body.style.backgroundColor = e.target.id;
      }
      else
      {
        body.style.backgroundColor = e.target.id;
      }
  })
});


```


## project 2

```javascript
const form = document.querySelector('form');

//this usecase will give you empty value so try ignore this process outside the eventlistner
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height`;
  }

  else if (weight === '' || weight < 0 || isNaN(weight))
  {
    results.innerHTML = `please give a valid weight`;
  }

  else
  {
      const bmi = (weight/((height*height)/10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`;
  }

});
```


## project 3

```javascript

const clock = document.getElementById('clock');
//consty clock  = document.querySelector('#clock');

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
},1000);

```


## project4

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

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
  //value 1 ar 100 er moddhe ache ki na check kore
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than one');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displayMessage(`gameover random number was ${randomNum}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //randomvalue = guess thik ki na
  if (guess === randomNum) {
    displayMessage(`you gussed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`you gussed number is too low`);
  } else if (guess > randomNum) {
    displayMessage(`you gussed number is too high`);
  }
}
function displayguess(guess) {
  //valuesclean or update previous guess or
  // update guesses remaining

  //userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(Message) {
  //low or hi message pass
  lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListner('click', function () {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```