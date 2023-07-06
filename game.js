// Get user input and ensure it is case insensitive
function getPlayerChoice() {
  let playerChoice = prompt(
    'Please enter either rock, paper, or scissors: '
  ).toLowerCase()
  while (
    playerChoice != 'rock' &&
    playerChoice != 'paper' &&
    playerChoice != 'scissors'
  ) {
    playerChoice = prompt(
      'Invalid Selection: Please enter rock, paper, or scissors: '
    ).toLowerCase()
  }
  return playerChoice
}

console.log(getPlayerChoice())
// Allow computer to choose between rock, paper, or scissors
// Display winner of each round
// Keep track of score
// Best of 5 rounds wins
