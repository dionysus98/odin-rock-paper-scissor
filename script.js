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
    if (playerSelection === computerSelection) return "Draw";
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
    let player = 0;
    let comp = 0;
    let score;

    for (let i = 0; i < 5; i++) {
        playerInput = prompt(`Rock - Paper - Scissor :`);
        const playerSelection = upperCase(playerInput);
        const computerSelection = computerplay();
        // playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}`);
        console.log(`your choice: ${playerSelection}`);
        console.log(`computer's choice: ${computerSelection}`);
        score = playRound(playerSelection, computerSelection);
        console.log(score);
        // console.log(typeof score);
        if (score === "You win!") {
            player++;
        } else if (score === "You lose!") {
            comp++;
        }
    }
    console.log(`RESULT: `);
    if (player > comp) {
        console.log(`You are the winner! your points: ${player}; computer's points: ${comp} `);
    } else if (player < comp) {
        console.log(`you didn't win! your points: ${player}; computer's points: ${comp}`);
    } else {
        console.log(`draw!`);
    }
}


game();