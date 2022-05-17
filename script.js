function computerPlay () {
    var rnd_num;
    rnd_num = Math.floor(Math.random()*3)
    if (rnd_num === 0) {
        return ("Rock");}
    else if (rnd_num === 1) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}


function computerPlay () {
    var rnd_num;
    rnd_num = Math.floor(Math.random()*3)
    if (rnd_num === 0) {
        return ("Rock");}
    else if (rnd_num === 1) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection === 'paper' && computerSelection === 'Scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'Rock') ||
        (playerSelection === 'rock' && computerSelection === 'Paper')) {
            return ("You Lose! Your" + playerSelection + " is beaten by " + computerSelection + "!");
    }
    else if ((playerSelection === 'rock' && computerSelection === 'Scissors') || 
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')) {
        return ("You Win! " + playerSelection + " beats " + computerSelection + "!");
    }
    else {
        return ("You Tied! Both of you picked " + computerSelection + "!");
    }
}

function game () {
    for (var i = 0; i < 10; i++) {
        let choice = prompt("Enter 'rock' 'paper' or 'scissors' please : ");
        let result = playRound(choice, computerPlay());
        alert (result);
    }
}