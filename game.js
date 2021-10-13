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
function playRound() {
  const playerSelection = prompt('CHOOSE YOUR WEAPON').toLowerCase();
  const computerSelection = computerPlay();
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        userScore++;
        return 'win';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return 'lose';
    } else {
        return 'draw';
    }
}
let userScore = parseInt(0);
let computerScore = parseInt(0);

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound());
        console.log('Player Score = ' +userScore);
        console.log('Computer Score = ' +computerScore); 
    }
    if (i === 5) {
        return alert('Game Over => Player ('+userScore+') vs Computer ('+computerScore+')');
    }

}
console.log(game());