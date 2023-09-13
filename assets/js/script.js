const rockUser = document.getElementById('rock-user');
const paperUser = document.getElementById('paper-user');
const scissorsUser = document.getElementById('scissors-user');
const rockComputer = document.getElementById('rock-com');
const paperComputer = document.getElementById('paper-com');
const scissorsComputer = document.getElementById('scissors-com');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const controlArea = document.getElementById('controls');
const resultScreen = document.getElementById('result-screen');
const nextButton = document.getElementById('next-button');
const gameOverScreen = document.getElementById('game-over-screen');
const gameOverText = document.getElementById('game-over');
const playAgainButton = document.getElementById('play-again');
let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;


rockButton.addEventListener('click', () => {
    userChoice = 'rock';
    paperUser.classList.add('hide');
    rockUser.classList.remove('hide');
    scissorsUser.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});


paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    paperUser.classList.remove('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});


scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.remove('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});


nextButton.addEventListener('click', () => {
    controlArea.classList.remove('hide');
    resultScreen.classList.add('hide');
});

playAgainButton.addEventListener('click', () => {
    controlArea.classList.remove('hide');
    resultScreen.classList.add('hide');
    gameOverScreen.classList.add('hide');
    computerScoreDisplay.innerHTML = 0;
    userScoreDisplay.innerHTML = 0;
    computerScore = 0;
    userScore = 0;
});

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = 'rock';
        rockComputer.classList.remove('hide');
        paperComputer.classList.add('hide');
        scissorsComputer.classList.add('hide');
    }
    if (randomNumber === 1) {
        computerChoice = 'paper';
        rockComputer.classList.add('hide');
        paperComputer.classList.remove('hide');
        scissorsComputer.classList.add('hide');
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors';
        rockComputer.classList.add('hide');
        paperComputer.classList.add('hide');
        scissorsComputer.classList.remove('hide');
    }

}

function decideResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = 'its a draw';
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'you win';
        userScoreDisplay.innerText = userScore + 1;
        userScore++;
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore + 1;
        computerScore++;
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore + 1;
        computerScore++;
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you win';
        userScoreDisplay.innerText = userScore + 1;
        userScore++;
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you win';
        userScoreDisplay.innerText = userScore + 1;
        userScore++;
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore + 1;
        computerScore++;
    }
}

function displayChoice() {
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
}

function showResult() {
    controlArea.classList.add('hide');
    resultScreen.classList.remove('hide');
    if (userScore >= 5) {
        gameOverScreen.classList.remove('hide');
        controlArea.classList.add('hide');
        resultScreen.classList.add('hide');
        gameOverText.innerHTML = 'Congratulations! You Win!';
    }

    if (computerScore >= 5) {
        gameOverScreen.classList.remove('hide');
        controlArea.classList.add('hide');
        resultScreen.classList.add('hide');
        gameOverText.innerHTML = 'Hard Luck. Computer Wins.';
    }
}