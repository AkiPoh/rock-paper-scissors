function getMachineChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function decideWinner (humanChoice, machineChoice) {
    if (humanChoice === ROCK && machineChoice === PAPER) {
        return MACHINE;
    } else if (humanChoice === PAPER && machineChoice === ROCK) {
        return HUMAN;
    } else if (humanChoice === ROCK && machineChoice === SCISSORS) {
        return HUMAN;
    } else if (machineChoice === ROCK && humanChoice === SCISSORS) {
        return MACHINE;
    } else if (humanChoice === SCISSORS && machineChoice === PAPER) {
        return HUMAN;
    } else if (machineChoice === SCISSORS && humanChoice === PAPER) {
        return MACHINE;
    }
    return("tie");
}

function playRound(humanChoice, roundNumber = "roundNumberUnspecified") {
    let machineChoice = getMachineChoice();
    let winner = decideWinner(humanChoice, machineChoice);
    let resultMessage = '';
    let gameMessage = "";

    if (winner === HUMAN) {
        ++humanScore;
        resultMessage = `You won, round ${roundNumber}!\n` +
                        `Your score: ${humanScore}.\n` +
                        `Machine score: ${machineScore}\n` +
                        `You chose ${humanChoice}, the machine chose ${machineChoice}.`;
    } else if (winner === MACHINE) {
        ++machineScore;
        resultMessage = `You lost, round ${roundNumber}!\n` +
                        `Your score: ${humanScore}.\n` +
                        `Machine score: ${machineScore}\n` +
                        `You chose ${humanChoice}, the machine chose ${machineChoice}.`;
    } else {
        resultMessage = `It's a tie, round ${roundNumber}!\n` +
                        `Your score: ${humanScore}.\n` +
                        `Machine score: ${machineScore}\n` +
                        `You chose ${humanChoice}, the machine chose ${machineChoice}.`;
    }

    if ((humanScore >= scoreToWin || machineScore >= scoreToWin) && humanScore !== machineScore) {
        if (humanScore > machineScore) {
            gameMessage = `\n\nYou won, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`;
        } else if (machineScore > humanScore) {
            gameMessage = `\n\nYou lost, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`;
        } else {
            gameMessage = `\n\nThe game is a tie, of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`;
        }
        resultMessage = resultMessage + gameMessage;
    }

    roundResultDiv.textContent = resultMessage;
    roundResultDiv.style.whiteSpace = 'pre-line';
}

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const HUMAN = "human"
const MACHINE = "machine"

let humanScore = 0
let machineScore = 0
let roundNumber = 0;
let scoreToWin = 5;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const roundResultDiv = document.querySelector("#roundResult");


console.log("Welome to playing Rock Paper Scissors!");



rockButton.addEventListener("click", () => {roundNumber++; playRound("rock", roundNumber); if ((humanScore >= scoreToWin || machineScore >= scoreToWin) && humanScore !== machineScore) {roundNumber = 0; humanScore = 0; machineScore = 0;}});
paperButton.addEventListener("click", () => {roundNumber++; playRound("paper", roundNumber); if ((humanScore >= scoreToWin || machineScore >= scoreToWin) && humanScore !== machineScore) {roundNumber = 0; humanScore = 0; machineScore = 0;}});
scissorsButton.addEventListener("click", () => {roundNumber++; playRound("scissors", roundNumber); if ((humanScore >= scoreToWin || machineScore >= scoreToWin) && humanScore !== machineScore) {roundNumber = 0; humanScore = 0; machineScore = 0;}});