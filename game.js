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
        return 'win';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'lose';
    } else {
        return 'draw';
    }
}


function game() {
    for (let i = 0; i < 5; i++)
    console.log(playRound());
}
console.log(game());