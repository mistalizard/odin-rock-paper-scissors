const winningScore = 5
let playerScore = 0
let computerScore = 0

const buttonID = document.querySelectorAll('button')
const player = document.querySelector('#player')
const computer = document.querySelector('#computer')

function resetScore() {
  playerScore = 0
  computerScore = 0
}

function updateScore() {
  player.textContent = playerScore
  computer.textContent = computerScore
}

// Allow computer to choose between rock, paper, or scissors
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  // Generates a random index value between 0 and the length of choices which is then used to assign a value to computerChoice
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  return computerChoice
}

// Compare player choice and computer choice
function playGame(player, computer) {
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

// Setup game
function game() {
  let playerChoice
  buttonID.forEach(button => {
    button.addEventListener('click', () => {
      playerChoice = button.id
      playGame(playerChoice, getComputerChoice())
      updateScore()
      console.log(
        `Current Score: Player: ${playerScore} | Computer: ${computerScore}`
      )
      if (playerScore === winningScore) {
        alert("Congratulations, you've won the match!\n\n Press OK to reset.")
        resetScore()
        updateScore()
      } else if (computerScore === winningScore) {
        alert(
          'Game Over. The computer has won the match.\n\n Press OK to reset.'
        )
        resetScore()
        updateScore()
      }
    })
  })
}
game()
