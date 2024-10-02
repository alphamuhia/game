// Variables to store player and computer scores
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('#game button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset');

// Event listeners for buttons (Rock, Paper, Scissors)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        displayResult(playerChoice, computerChoice, winner);
    });
});

// code for computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// code to detamine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// score update based on the winner
function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

//  result disply for each round
function displayResult(player, computer, winner) {
    if (winner === 'tie') {
        resultDisplay.textContent = `It's a tie! You both chose ${player}.`;
    } else if (winner === 'player') {
        resultDisplay.textContent = `You win! ${player} beats ${computer}.`;
    } else {
        resultDisplay.textContent = `Computer wins! ${computer} beats ${player}.`;
    }
}

// Game reset
resetButton.addEventListener('click', resetGame);

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
}
