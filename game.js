function computerPlay() {
    let x = Math.random();
    if (x <= 0.33) {
        return 'scissors';
    } else if (x <= 0.66) {
        return 'paper';
    } else {
        return 'rock';
    }
}
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors')||(playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')) {
        return console.log('WIN');
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')||(playerSelection === 'paper' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'rock')) {
        return console.log('LOSE');
    } else if ((playerSelection === 'rock' && computerSelection === 'rock')||(playerSelection === 'paper' && computerSelection === 'paper')||(playerSelection === 'scissors' && computerSelection === 'scissors')) {
        return console.log('DRAW');
    } else {
        return console.log('LOL ERROR');
    }
}
const playerSelection = prompt('CHOOSE YOUR WEAPON').toLowerCase();
const computerSelection = computerPlay();

function game() {
}
console.log(game());