function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to number for easier comparison
    let lose = false
    // Check for tie
    if(playerSelection === computerSelection) {
        return "Tie!"
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
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }

    return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
}

function game(e) {
    // for(let i = 0; i < 5; i++) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute for getting data-key attribute
        playerSelection = e.target.getAttribute('data-key')
        playerSelection = playerSelection.toLowerCase()

        let computerSelection = moves[getComputerChoice()]
        console.log(playRound(playerSelection, computerSelection))
    // }
}

let moves = ["rock", "paper", "scissors"]

const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', game))
