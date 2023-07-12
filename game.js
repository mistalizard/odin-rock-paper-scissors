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
function postGameMessage(message) {
  const gameMessage = document.querySelector('#game-messaging')
  gameMessage.textContent = message
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
          postGameMessage('Both players chose Rock! This round is a draw!')
          break
        case 'paper':
          postGameMessage('Paper beats Rock! The computer wins this round!')
          computerScore++
          break
        case 'scissors':
          postGameMessage('Rock beats scissors! The player wins this round!')
          playerScore++
          break
      }
      break
    case 'paper':
      switch (computerChoice) {
        case 'rock':
          postGameMessage('Paper beats Rock! The player wins this round!')
          playerScore++
          break
        case 'paper':
          postGameMessage('Both players chose Paper! This round is a draw!')
          break
        case 'scissors':
          postGameMessage('Scissors beats paper! The computer wins this round!')
          computerScore++
          break
      }
      break
    case 'scissors':
      switch (computerChoice) {
        case 'rock':
          postGameMessage('Rock beats scissors! The computer wins this round!')
          computerScore++
          break
        case 'paper':
          postGameMessage('Scissors beats paper! The player wins this round!')
          playerScore++
          break
        case 'scissors':
          postGameMessage('Both players chose scissors! This round is a draw!')
          computerScore++
          break
      }
      break
  }
}

// Setup game
function game() {
  buttonID.forEach(button => {
    button.addEventListener('click', () => {
      let playerChoice = button.id

      playGame(playerChoice, getComputerChoice())
      updateScore()

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
