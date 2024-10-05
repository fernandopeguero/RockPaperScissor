/* write the rock paper scissor login 
create one function for the machine and one function where you choose between the options
then create a function to play the game.

write a function getWinner that takes 2 int and return the winner 
*/
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

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
        }

        if (computerScore === 5) {
            winnerText.textContent =
                "You Lose!, Try better next time you filthy human.";
        }
    }
}
