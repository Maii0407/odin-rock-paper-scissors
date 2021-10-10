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
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return alert ('YOU WIN');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return alert ('YOU LOSE T_T');
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return alert('DRAW');
    } else {
        return alert('FUCK INVALID AGAIN');
    }
}
const playerSelection = prompt('CHOOSE YOUR WEAPON').toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
