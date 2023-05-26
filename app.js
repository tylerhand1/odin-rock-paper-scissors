function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choice
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lower case
    playerSelection = playerSelection.toLowerCase()

    // Convert playerSelection to number for easier comparison
    let playerSelectionNum
    switch(playerSelection) {
        case "rock":
            playerSelectionNum = 0
            break
        case "paper":
            playerSelectionNum = 1
            break
        case "scissors":
            playerSelectionNum = 2
            break
    }

    // Check for tie
    if(playerSelectionNum === computerSelection) {
        return "Tie!"
    }
    // Player wins if their move is "higher" in the array or in the edge case of player plays rock and computer plays scissors
    if(playerSelectionNum > computerSelection || (playerSelectionNum == 0 && computerSelection == 2)) {
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + moves[computerSelection].charAt(0).toUpperCase() + moves[computerSelection].slice(1)
    } else {
        return "You lose! " + moves[computerSelection].charAt(0).toUpperCase() + moves[computerSelection].slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }
}


let moves = ["rock", "paper", "scissors"]

let playerSelection = "rock"
let computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))