function computerPlay() { 
    
    let result = Math.floor((Math.random() * 3) + 1);

    if (result === 1) {
        return 'Rock';
    }

    else if (result === 2 ) {
        return 'Paper';
    }

    else if (result === 3) {
        return 'Scissors';
    }
}

let computerScore = 0;
let playerScore = 0;
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return 'You lose! Paper beats Rock!';
    }

    else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return 'You lose! Scissors beat Paper!';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return 'You lose! Rock beats Scissors!';
    }

    else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore += 1;
        return 'You win! Paper beats Rock!';
    }

    else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        return 'You win! Scissors beat Paper!';
    }

    else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        return 'You win! Rock beats Scissors!';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'Rock') | (playerSelection === 'paper' && computerSelection === 'Paper') | (playerSelection === 'scissors' && computerSelection === 'Scissors')) {
        return 'It is a draw!';
    }
}

function game() {

    // Round 1
    playerSelection = prompt("Round 1: what's your choice?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
    // Round 2
    playerSelection = prompt("Round 2: what's your choice?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // Round 3 
    playerSelection = prompt("Round 3: what's your choice?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // Round 4
    playerSelection = prompt("Round 4: what's your choice?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // Round 5
    playerSelection = prompt("Round 5: what's your choice?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    // Final Score
    if (playerScore > computerScore) {
        return `You have won ${playerScore} - ${computerScore}`;
    }

    else if (playerScore < computerScore) {
        return `You have lost ${computerScore} - ${playerScore}`;
    }

    else if (playerScore === computerScore) {
        return 'It\'s a draw';
    }
}
