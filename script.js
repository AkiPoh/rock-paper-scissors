

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

function validateChoice(choice) {
    if (choice === ROCK || choice === PAPER || choice === SCISSORS) {
        return true;
    }
}

function getHumanChoice() {
    let userInputRequestMessage = 'Choose "rock", "paper" or "scissors": ';
    let exclamationMarks = "!"; //"!" added every time input entered wrong
    while (true) {
    let userInput = prompt(userInputRequestMessage).trim().toLowerCase();
    if (validateChoice(userInput) === true) {
        return userInput;
        } else {
            userInputRequestMessage = `Please enter valid input${exclamationMarks}\nChoose "rock", "paper" or "scissors": `;
            exclamationMarks += "!";
        }
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
    if (winner === HUMAN) {
        ++humanScore;
        console.log(`You won, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${machineScore}\nYou chose ${humanChoice}, the machine chose ${machineChoice}.`);
        return;
    } else if (winner === MACHINE) {
        ++machineScore;
        console.log(`You lost, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${machineScore}\nYou chose ${humanChoice}, the machine chose ${machineChoice}.`);
        return;
    } else {
        console.log(`It's a tie, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${machineScore}\nYou chose ${humanChoice}, the machine chose ${machineChoice}.`);
        return;
    }
}

function playGame() {
    let roundNumber;
    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        playRound(roundNumber);
    }
    roundNumber--;  
    if (humanScore > machineScore) {
        console.log(`You won, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`);
    } else if (machineScore > humanScore) {
        console.log(`You lost, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`);
    } else {
        console.log(`The game is a tie, of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${machineScore}`);
    }
}

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const HUMAN = "human"
const MACHINE = "machine"

let humanScore = 0
let machineScore = 0
let roundNumber = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

console.log("Welome to playing Rock Paper Scissors!");



rockButton.addEventListener("click", () => {roundNumber++; playRound("rock", roundNumber);});
paperButton.addEventListener("click", () => {roundNumber++; playRound("paper", roundNumber);});
scissorsButton.addEventListener("click", () => {roundNumber++; playRound("scissors", roundNumber);});