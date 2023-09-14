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
const questionMarkUser = document.getElementById('question-mark-user');
const questionMarkCom = document.getElementById('question-mark-com');
const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;



/**
 * Event listener for when the rock button is clicked
 * It displays the rock image and then hides all other images
 * it then runs four funtions.
 */
rockButton.addEventListener('click', () => {
    userChoice = 'rock';
    paperUser.classList.add('hide');
    rockUser.classList.remove('hide');
    scissorsUser.classList.add('hide');
    questionMarkUser.classList.add('hide');
    questionMarkCom.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});



/**
 * Event listener for when the paper button is clicked
 * It displays the rock image and then hides all other images
 * it then runs four funtions.
 */
paperButton.addEventListener('click', () => {
    userChoice = 'paper';
    paperUser.classList.remove('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
    questionMarkUser.classList.add('hide');
    questionMarkCom.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});

/**
 * Event listener for when the scissors button is clicked
 * It displays the scissors image and then hides all other images
 * it then runs four funtions.
 */
scissorsButton.addEventListener('click', () => {
    userChoice = 'scissors';
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.remove('hide');
    questionMarkUser.classList.add('hide');
    questionMarkCom.classList.add('hide');
    generateComputerChoice();
    decideResult();
    displayChoice();
    showResult();
});


/**
 * Event listener for when the next button is clicked
 * It displays the rock, paper and scissors buttons again
 * it then displays the default images for the user and com areas.
 */
nextButton.addEventListener('click', () => {
    controlArea.classList.remove('hide');
    resultScreen.classList.add('hide');
    userChoiceDisplay.innerHTML = '?';
    computerChoiceDisplay.innerHTML = '?';
});

/**
 * Event listener for when the play again button is clicked
 * It displays the default starting image and then hides all other images
 * it resets the score and returns everything to its starting state
 */
playAgainButton.addEventListener('click', () => {
    controlArea.classList.remove('hide');
    resultScreen.classList.add('hide');
    gameOverScreen.classList.add('hide');
    questionMarkUser.classList.remove('hide');
    questionMarkCom.classList.remove('hide');
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
    rockComputer.classList.add('hide');
    paperComputer.classList.add('hide');
    scissorsComputer.classList.add('hide');
    computerScoreDisplay.innerHTML = 0;
    userScoreDisplay.innerHTML = 0;
    computerScore = 0;
    userScore = 0;
    userChoiceDisplay.innerHTML = '?';
    computerChoiceDisplay.innerHTML = '?';
});


/**
 * Event listener for when the start button is clicked
 * It displays the rock paper and scissors buttons when clicked
 */
startButton.addEventListener('click', () => {
    startMenu.classList.add('hide');
    controlArea.classList.remove('hide');
});



/**
 * Funcion that decides what the computers choice is going to be
 * It generates a random number between 0 and 2 and attributes it to a choice
 * it then displays the appropriate image and hides the others
 */
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


/**
 * Funcion that decides the outcome of the game
 * It compares the computers choice with the users choice and decides the winner
 * it then displays a message that tells the user the outcome
 */
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


/**
 * Funcion that shows the computer and user choices
 * It shows a message beside the image of the choice
 */
function displayChoice() {
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
}


/**
 * Funcion that ends the game if the user or computer reach 5 points
 * It then removes the control buttons and displays the play again button
 * it then displays a message showing who won
 */
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