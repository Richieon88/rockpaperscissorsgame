const rockUser = document.getElementById('rock-user');
const paperUser = document.getElementById('paper-user');
const scissorsUser = document.getElementById('scissors-user');
const rockComputer = document.getElementById('rock-com');
const paperComputer = document.getElementById('paper-com');
const scissorsComputer = document.getElementById('scissors-com');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.add('hide');
    rockUser.classList.remove('hide');
    scissorsUser.classList.add('hide');
});


paperButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.remove('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.add('hide');
});


scissorsButton.addEventListener('click', () => {
    console.log('hi');
    paperUser.classList.add('hide');
    rockUser.classList.add('hide');
    scissorsUser.classList.remove('hide');
});
