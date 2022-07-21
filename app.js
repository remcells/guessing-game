// generate random number from.1-20
// keep-record of attempts
// check input is lower or higher
// check if input is === number of the day

const generateRandomNumber = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};
const attempts = [];
const allowedAttempts = 3;
const sessionNumber = generateRandomNumber(1, 20);
// changes input box to reset button when game is over. Need help explanation with Sir Jag/Marvs
const gameOverReset = () => {
  const changeItem = document.getElementById('input-field');
  const newItem = document.createElement('Reset');
  newItem.innerHTML =
    '<button value="Reset" onClick="window.location.reload()">Reset</button>';
  changeItem.parentNode.replaceChild(newItem, changeItem);
};
// shows the user's latest guesses
const guessOutput = () => {
  const guessesDiv = document.querySelector('.guesses');
  guessesDiv.innerText = `Your Guess: ${attempts[attempts.length - 1]}`;
};
//counts the num of attempts
const attemptsCounter = () => {
  const attemptsDiv = document.querySelector('.attempts-counter');
  if (allowedAttempts - attempts.length > 0) {
    attemptsDiv.innerText = `${
      allowedAttempts - attempts.length
    } attempt/s left`;
  } else {
    attemptsDiv.innerText = 'Game Over';
    attemptsDiv.style.color = 'green';
    gameOverReset();
  }
};

//submit function
const onSubmitHandler = (event) => {
  event.preventDefault();

  if (attempts.length >= allowedAttempts) {
    attempts.splice(0, allowedAttempts);
  }
  const input = document.getElementById('input-field');

  attempts.push(input.value);

  const indicators = document.querySelector('.indicators');
  const value = Number(input.value);
  if (value === sessionNumber) {
    indicators.innerText = 'Good Job';
    gameOverReset();
  }
  if (value > sessionNumber) {
    indicators.innerText = 'Too High';
  }
  if (value < sessionNumber) {
    indicators.innerText = 'Too Low';
  }
  attemptsCounter();

  input.value = '';
  guessOutput();
};

const onSubmit = document.getElementById('my-form');
onSubmit.addEventListener('submit', onSubmitHandler);
