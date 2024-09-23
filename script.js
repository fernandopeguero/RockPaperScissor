/* write the rock paper scissor login 
create one function for the machine and one function where you choose between the options
then create a function to play the game.

write a function getWinner that takes 2 int and return the winner 
*/


const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor"
}


function getComputerChoice() {
    const keys = Object.keys(choices)

    return choices[keys[Math.floor(keys.length * Math.random())]]
}


function getHumanChoice() {

}


function getWinner() {


}