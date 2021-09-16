"use strict";

// console.log(`Hello world`);

// let answer = Math.trunc(Math.random() * 3) + 1;
// console.log(answer);

function computerplay() {
    let answer = Math.trunc(Math.random() * 3) + 1;
    if (answer === 1) return "Rock";
    else if (answer === 2) return "Paper";
    else if (answer === 3) return "Scissor";
}

function upperCase(str) {
    const lowerCase = str.toLowerCase();
    const result = lowerCase[0].toUpperCase() + str.slice(1);
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Continue";
    else if (playerSelection === "Rock" && computerSelection === "Scissor") return "You win!";
    else if (playerSelection === "Scissor" && computerSelection === "Rock") return "You lose!";
    else if (playerSelection === "Scissor" && computerSelection === "Paper") return "You win!";
    else if (playerSelection === "Paper" && computerSelection === "Scissor") return "You lose!";
    else if (playerSelection === "Paper" && computerSelection === "Rock") return "You win!";
    else if (playerSelection === "Rock" && computerSelection === "Paper") return "You lose!";
}



let playerInput;
// const playerSelection = upperCase(playerInput);
// const computerSelection = computerplay();

// console.log(`your choice: ${playerSelection}`);
// console.log(`computer's choice: ${computerSelection}`);
// const result = playRound(playerSelection, computerSelection);
// console.log(result);

function game() {
    for (let i = 0; i < 5; i++) {
        playerInput = prompt(`Rock - Paper - Scissor :`);
        const playerSelection = upperCase(playerInput);
        const computerSelection = computerplay();
        // playRound(playerSelection, computerSelection);
        console.log(`your choice: ${playerSelection}`);
        console.log(`computer's choice: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

}


game();