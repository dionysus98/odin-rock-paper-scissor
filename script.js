"use strict";

// console.log(`Hello world`);

// let answer = Math.trunc(Math.random() * 3) + 1;
// console.log(answer);

const rock = document.getElementById('player-rock');
const scissor = document.getElementById('player-scissor');
const paper = document.getElementById('player-paper');
const score = document.getElementById('player-score');
const scoreComp = document.getElementById("computer-score");
const winner = document.getElementById('winner');
const imgPlayer = document.getElementById('player-img');
const imgComp = document.getElementById('computer-img');
const computerRps = document.getElementById("computer-rps");


rock.addEventListener("click", function rock() {
    imgPlayer.src = "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/rock--left.png";
    imgComp
    imgComp.src = `https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/${computerplay()}--left.png`;



    // console.log(this.textContent);
    // if (this.textContent === computerplay()) return;
    // else if (this.textContent && computerplay() === "Scissor") {
    //     score.textContent = score + 1;
    // }

})

paper.addEventListener("click", function paper() {
    imgPlayer.src = "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/paper--left.png"
    imgComp.src = `https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/${computerplay()}--left.png`;
})

scissor.addEventListener("click", function scissor() {
    imgPlayer.src = "https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/scissors--left.png"
    imgComp.src = `https://www3.bostonglobe.com//rw/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2018/05/rockpaperscissors/assets/${computerplay()}--left.png`;
})



function computerplay() {
    let answer = Math.trunc(Math.random() * 3) + 1;
    if (answer === 1) return "rock";
    else if (answer === 2) return "paper";
    else if (answer === 3) return "scissors";
}

function upperCase(str) {
    const lowerCase = str.toLowerCase();
    // return lowerCase;
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
        playerInput = (prompt(`Rock - Paper - Scissor :`));
        const playerSelection = upperCase(playerInput);
        const computerSelection = upperCase(computerplay());
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


// game();