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
});


paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    paperUser.classList.remove('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
});


scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.remove('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
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
        userScoreDisplay.innerText = userScore;
        userScore++;
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore;
        computerScore++;
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore;
        computerScore++;
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'you win';
        userScoreDisplay.innerText = userScore;
        userScore++;
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = 'you win';
        userScoreDisplay.innerText = userScore;
        userScore++;
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = 'you lose';
        computerScoreDisplay.innerText = computerScore;
        computerScore++;
    }
}

function displayChoice() {
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
}