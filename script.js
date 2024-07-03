const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const HUMAN = "human"
const MACHINE = "machine"

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
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

function decideWinner (humanChoice, computerChoice) {
    if (humanChoice === ROCK && computerChoice === PAPER) {
        return MACHINE;
    } else if (humanChoice === PAPER && computerChoice === ROCK) {
        return HUMAN;
    } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
        return HUMAN;
    } else if (computerChoice === ROCK && humanChoice === SCISSORS) {
        return MACHINE;
    } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
        return HUMAN;
    } else if (computerChoice === SCISSORS && humanChoice === PAPER) {
        return MACHINE;
    }
    return("tie");
}

function playRound(roundNumber) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = decideWinner(humanChoice, computerChoice);
    if (winner === HUMAN) {
        ++humanScore;
        console.log(`You won, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${computerScore}\nYou chose ${humanChoice}, the machine chose ${computerChoice}.`);
        return;
    } else if (winner === MACHINE) {
        ++computerScore;
        console.log(`You lost, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${computerScore}\nYou chose ${humanChoice}, the machine chose ${computerChoice}.`);
        return;
    } else {
        console.log(`It's a tie, round ${roundNumber}!\nYour score: ${humanScore}.\nMachine score: ${computerScore}\nYou chose ${humanChoice}, the machine chose ${computerChoice}.`);
        return;
    }
}

function playGame() {
    let roundNumber;
    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        playRound(roundNumber);
    }
    roundNumber--;  
    if (humanScore > computerScore) {
        console.log(`You won, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost, the game of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${computerScore}`);
    } else {
        console.log(`The game is a tie, of ${roundNumber} rounds!\nYour score: ${humanScore}.\nMachine score: ${computerScore}`);
    }
}

console.log("Welome to playing Rock Paper Scissors!");

//console.log(getComputerChoice());
//console.log(getHumanChoice());

playGame();