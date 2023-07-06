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

// Allow computer to choose between rock, paper, or scissors
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  // Generates a random index value between 0 and the length of choices which is then used to assign a value to computerChoice
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice
}
console.log(getComputerChoice())
// Display winner of each round
// Keep track of score
// Best of 5 rounds wins
