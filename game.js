const numOfRounds = 5
const winningScore = 3
let playerScore = 0
let computerScore = 0

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

// Compare player choice and computer choice
function compareChoices(player, computer) {
  let playerChoice = player
  let computerChoice = computer
  switch (playerChoice) {
    case 'rock':
      switch (computerChoice) {
        case 'rock':
          console.log('Both players chose Rock! This round is a draw!')
          break
        case 'paper':
          console.log('Paper beats Rock! The computer wins this round!')
          computerScore++
          break
        case 'scissors':
          console.log('Rock beats scissors! The player wins this round!')
          playerScore++
          break
      }
      break
    case 'paper':
      switch (computerChoice) {
        case 'rock':
          console.log('Paper beats Rock! The player wins this round!')
          playerScore++
          break
        case 'paper':
          console.log('Both players chose Paper! This round is a draw!')
          break
        case 'scissors':
          console.log('Scissors beats paper! The computer wins this round!')
          computerScore++
          break
      }
      break
    case 'scissors':
      switch (computerChoice) {
        case 'rock':
          console.log('Rock beats scissors! The computer wins this round!')
          computerScore++
          break
        case 'paper':
          console.log('Scissors beats paper! The player wins this round!')
          playerScore++
          break
        case 'scissors':
          console.log('Both players chose scissors! This round is a draw!')
          computerScore++
          break
      }
      break
  }
}
// Display winner of each round
// Keep track of score
// Best of 5 rounds wins
// Setup game
