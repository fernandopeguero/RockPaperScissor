/* write the rock paper scissor login 
create one function for the machine and one function where you choose between the options
then create a function to play the game.

write a function getWinner that takes 2 int and return the winner 
*/
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

// options buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

// UI Score

const displayUserScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");

const reset = document.querySelector(".reset");

reset.addEventListener("click", (e) => {
    e.preventDefault();
    if (isGameOver) {
        toggleButtons();
        resetGame();
    } else {
        resetGame();
    }
});

// display text field
const winnerText = document.querySelector(".display-winner");

const buttons = [rock, paper, scissor];

buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        const userChoice = e.target.value;
        console.log(userChoice);
        playGame(userChoice);
    })
);

const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor",
};

function getComputerChoice() {
    const keys = Object.keys(choices);
    return choices[keys[Math.floor(keys.length * Math.random())]];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    getWinner(playerChoice, computerChoice);

    console.log("computer: ", computerChoice);

    function getWinner(playerChoice, computerChoice) {
        if (
            (playerChoice === "rock" &&
                computerChoice !== "paper" &&
                computerChoice !== "rock") ||
            (playerChoice === "paper" &&
                computerChoice !== "scissor" &&
                computerChoice !== "paper") ||
            (playerChoice === "scissor" &&
                computerChoice !== "rock" &&
                computerChoice !== "scissor")
        ) {
            humanScore++;
            winnerText.textContent = "Player One Point.";
        } else if (playerChoice === computerChoice) {
            winnerText.textContent = "Draw!!!, You are a formidable opponent.";
        } else {
            computerScore++;
            winnerText.textContent = "Computer One Point.";
        }

        if (humanScore === 5) {
            winnerText.textContent = "You Win! Hurray!!!";
            toggleButtons();
            isGameOver = true;
        }

        if (computerScore === 5) {
            winnerText.textContent =
                "You Lose!, Try better next time you filthy human.";
            toggleButtons();
            isGameOver = true;
        }

        // update ui score
        updateScore();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    updateScore();
}

function toggleButtons() {
    rock.toggleAttribute("disabled");
    paper.toggleAttribute("disabled");
    scissor.toggleAttribute("disabled");
}

function updateScore() {
    displayUserScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
}
