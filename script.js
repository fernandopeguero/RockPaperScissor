/* write the rock paper scissor login 
create one function for the machine and one function where you choose between the options
then create a function to play the game.

write a function getWinner that takes 2 int and return the winner 
*/

const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor",
};

function getComputerChoice() {
    const keys = Object.keys(choices);
    return choices[keys[Math.floor(keys.length * Math.random())]];
}

function getHumanChoice() {
    let userInput = null;

    do {
        userInput = prompt(
            "1. Rock - 2. Paper - 3. Scissor.\n Please enter a number:"
        );
        userInput = Number(userInput); // Convert input to a number
    } while (isNaN(userInput) || userInput < 1 || userInput > 3);

    const keys = Object.keys(choices);

    return choices[keys[userInput - 1]];
}

function playGame() {
    let counter = 0;
    let humanScore = 0;
    let computerScore = 0;

    const computerChoice = getComputerChoice();

    const humanChoice = getHumanChoice();

    getWinner(humanChoice, computerChoice);

    function getWinner(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice !== "paper") {
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice !== "scissor") {
            humanScore++;
        } else if (humanChoice === "scissor" && computerChoice !== "rock") {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    counter++;

    if (humanScore > computerScore) {
        console.log("You Win! Hurray!!!");
    } else if (humanScore < computerScore) {
        console.log("You Lose!, Try better next time you filthy human.");
    } else {
        console.log("Draw!!!, You are a formidable opponent.");
    }
}
