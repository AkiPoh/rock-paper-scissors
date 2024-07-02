console.log("Welome to playing Rock Paper Scissors!");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function validateChoice(choice) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    }
}

function getHumanChoice() {
    let userInputRequestMessage = 'Choose "rock", "paper" or "scissors": ';
    let exclamationMarks = "!"; //"!" added every time input entered wront
    while (true) {
    let userInput = prompt(userInputRequestMessage).trim().toLowerCase();
    if (validateChoice(userInput) === true) {
        return userInput;
        } else {
            userInputRequestMessage = `Please enter valid input${exclamationMarks}\nChoose "rock", "paper" or "scissors": `;
            exclamationMarks += "!"
        }
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());