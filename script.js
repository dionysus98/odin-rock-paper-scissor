"use strict";

// console.log(`Hello world`);

const rock = document.getElementById('player-rock');
const scissor = document.getElementById('player-scissor');
const paper = document.getElementById('player-paper');
let score = document.getElementById('player-scores');
let scoreComp = document.getElementById("computer-scores");
const winner = document.getElementById('winner');
const imgPlayer = document.getElementById('player-img');
const imgComp = document.getElementById('computer-img');
let computerRps = document.getElementById("computer-rps");
let localDisplay = document.getElementById("local-display");
const reset = document.getElementById("reset");



function displayScores() {

    if (localDisplay.textContent === "You win!") {
        score.textContent = Number(score.textContent) + 1;

    } else if (localDisplay.textContent === "You lose!") {
        scoreComp.textContent = Number(scoreComp.textContent) + 1;
    }
}


function finalScore() {

    if (score.textContent === "5") {

        winner.textContent = "YOU ARE THE CHAMPION, MY FRIEND!";

    } else if (scoreComp.textContent === "5") {

        winner.textContent = "THE COMPUTER HAS WON!";
    }
}


function game() {

    if (winner.textContent === "YOU ARE THE CHAMPION, MY FRIEND!" || winner.textContent === "THE COMPUTER HAS WON!") {
        return;
    }
    finalScore();

    let selection = lowerCase(this.textContent);

    imgPlayer.src = `https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/${selection}--left.png`;
    imgComp

    let computer = computerplay();

    imgComp.src = `https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/${computer}--left.png`;


    let player = this.textContent;
    computerRps.textContent = `${upperCase(computer)}`;

    playRound(player, computerRps.textContent);

    displayScores();

}

function again() {

    score.textContent = 0;
    scoreComp.textContent = 0;
    winner.textContent = "?";
    localDisplay.textContent = "LET'S BEGIN c:";
    computerRps.textContent = ":D";

}


function computerplay() {
    let answer = Math.trunc(Math.random() * 3) + 1;
    if (answer === 1) return "rock";
    else if (answer === 2) return "paper";
    else if (answer === 3) return "scissors";
}


function upperCase(str) {
    const lowerCase = str.toLowerCase();
    const result = lowerCase[0].toUpperCase() + str.slice(1);
    return result;
}


function lowerCase(str) {
    return str.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return localDisplay.textContent = "Draw";
    else if (playerSelection === "Rock" && computerSelection === "Scissors") return localDisplay.textContent = "You win!";
    else if (playerSelection === "Scissors" && computerSelection === "Rock") return localDisplay.textContent = "You lose!";
    else if (playerSelection === "Scissors" && computerSelection === "Paper") return localDisplay.textContent = "You win!";
    else if (playerSelection === "Paper" && computerSelection === "Scissors") return localDisplay.textContent = "You lose!";
    else if (playerSelection === "Paper" && computerSelection === "Rock") return localDisplay.textContent = "You win!";
    else if (playerSelection === "Rock" && computerSelection === "Paper") return localDisplay.textContent = "You lose!";
}



rock.addEventListener("click", game);

paper.addEventListener("click", game);

scissor.addEventListener("click", game);

reset.addEventListener("click", again);