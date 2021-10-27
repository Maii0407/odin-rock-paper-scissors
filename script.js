// event listener for player selection
const selections = document.querySelectorAll('.selection');
selections.forEach(selection => selection.addEventListener('click', playRound));

// play 1 round of rock paper scissors
function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    console.log(playerSelection, computerSelection);

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {        
        alert('win');
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {       
        alert('lose');
    } else {
        alert('draw');
    }
}

// gets computers choice
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