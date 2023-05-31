function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to number for easier comparison
    let lose = false
    // Check for tie
    if(playerSelection === computerSelection) {
        return -1 // tie
    }

    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            // Lose
            lose = true
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            // Lose
            lose = true
        }
    } else {
        if(computerSelection === "rock") {
            // Lose
            lose = true
        } 
    }

    if(lose) {
        return 0 // lose
    }

    return 1 // win
}

function game(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute for getting data-key attribute
    playerSelection = e.target.getAttribute('data-key')
    playerSelection = playerSelection.toLowerCase()

    let computerSelection = moves[getComputerChoice()]
    let win = playRound(playerSelection, computerSelection)
    switch(win) {
        case -1:
            break;
        case 0:
            document.querySelector('.computer-score').textContent = ++computerScore
            break;
        case 1:
            document.querySelector('.player-score').textContent = ++playerScore
            break;
    }
    if(playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => button.removeEventListener('click', game))
        buttons.forEach(button => button.removeAttribute('class'))
        // Display winner
        let container = document.querySelector('.score')
        let resultContainer = document.createElement('div')
        let result = document.createElement('h3')

        let player = document.querySelector('.player')
        let computer = document.querySelector('.computer')

        resultContainer.setAttribute('class', 'result')

        if(playerScore === 5) {
            result.textContent = 'Player wins!'
        } else {
            result.textContent = 'Computer wins!'
        }

        container.removeChild(player)
        container.removeChild(computer)
        
        resultContainer.appendChild(result)
        container.appendChild(resultContainer)
    }
}

let moves = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button')

let playerScore = Number.parseInt(document.querySelector('.player-score').textContent)
let computerScore = Number.parseInt(document.querySelector('.computer-score').textContent)

buttons.forEach(button => button.addEventListener('click', game))
