let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Creating a generateTarget() function that will return random numbers between 0 and 9
function generateTarget() {
  return Math.floor(Math.random()* 10);
}

//Creating a compareGuesses() function to determine which parameter is closest to the target
function compareGuesses(humanGuess,computerGuess,secretTargetNumber) {
const humanDifference = Math.abs(secretTargetNumber - humanGuess);
const computerDifference = Math.abs(secretTargetNumber - computerGuess);
if (humanDifference === computerDifference) {
  return true;
} else if (humanDifference <= computerDifference) {
  return true;
} else {
  return false;
}
}

//Creating an updateScore() function
function updateScore(winner) {
if (winner === 'human') {
  humanScore++
} else if (winner === 'computer') {
  computerScore++
} else {
  console.log('Error!')
}
}

//Creating an advanceRound() function to increase the value of currentRoundNumber by 1
function advanceRound() {
  currentRoundNumber++
}
