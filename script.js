function computerPlay () {
    var rnd_num;
    rnd_num = Math.floor(Math.random()*3);
    if (rnd_num === 0) {
        return ("Rock");}
    else if (rnd_num === 1) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}


function getPlayerInput() {
    let validEntry = false;
    let choice = "";
    do {
        choice = prompt("Enter 'rock' 'paper' or 'scissors' please : ");
        choice = choice.toLowerCase();
        if ((choice != "rock") && (choice != "paper") && (choice != "scissors")) {
            alert ("I'm sorry, " + choice + " is not allowed to play Rock, Paper, Scissors!");
        }
        else {
            validEntry = true;
        }
    } while (validEntry == false);
    return (choice);
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection === 'paper' && computerSelection === 'Scissors') || (playerSelection === 'scissors' && computerSelection === 'Rock') || (playerSelection === 'rock' && computerSelection === 'Paper')) {
            return ("You Lose! Your " + playerSelection + " is beaten by the computer's " + computerSelection + "!");
    }
    else if ((playerSelection === 'rock' && computerSelection === 'Scissors') || (playerSelection === 'paper' && computerSelection === 'Rock') || (playerSelection === 'scissors' && computerSelection === 'Paper')) {
        return ("You Win! Your " + playerSelection + " beats the computer's " + computerSelection + "!");
    }
    else {
        return ("You Tied! Both of you picked " + computerSelection + "!");
    }
}

function game () {

}