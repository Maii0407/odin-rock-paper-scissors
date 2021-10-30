// event listener for player selection
const selections = document.querySelectorAll('.selection');
selections.forEach(selection => selection.addEventListener('click', playGame));

//player choices for console.log
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//player and computer score
let playerScore = parseInt(0);
let computerScore = parseInt(0);

// play round of rock paper scissors
function playGame(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
    const endGame = keepScore();

    console.log(playerSelection, computerSelection);
}

//gets result of game
function getResult(playerSelection, computerSelection){
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) { 
        document.getElementById('playerScore').innerHTML = ++playerScore;      
        alert('win');
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) { 
        document.getElementById('computerScore').innerHTML = ++computerScore;     
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

//keep score and announce winner
function keepScore() {
    if (playerScore === 5){
        alert('CONGRATULATIONS YOU WIN');
    } else if (computerScore === 5){
        alert('LOL U GOT BEAT BY A ROBOT');
    } else {
        return;
    }
}

//show who wins who loses
function showResult(result, computerSelection){

}