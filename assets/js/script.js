const rockUser = document.getElementById('rock-user');
const paperUser = document.getElementById('paper-user');
const scissorsUser = document.getElementById('scissors-user');
const rockComputer = document.getElementById('rock-com');
const paperComputer = document.getElementById('paper-com');
const scissorsComputer = document.getElementById('scissors-com');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let computerChoice;


rockButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.add('hide');
    rockUser.classList.remove('hide');
    scissorsUser.classList.add('hide');
    generateComputerChoice();
});


paperButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.remove('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
    generateComputerChoice();
});


scissorsButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.remove('hide');
    generateComputerChoice();
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
