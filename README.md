# rock-paper-scissors-the-odin-project
This project is being done as part of The Odin Project course as the first practise project for Javascript.

## Development
2.7.2024 - 

### Dev Stage 1
2.7.2024 - 3.7.2024

Establish basic functionality and make the game playable (without UI).
- [x] Set up project
    - Create Github project
    - Write project outline
    - Create HTML with externally linked Javascript script
- [x] Implement "getComputerChoice()"
    - Randomyly returns "rock", "paper" or scissors
    - Validate functionality
- [x] Implement "getHumanChoice()"
    - With "prompt()" ask for user input
    - Trim whitespaces from input
    - Set input to lower case letters
    - Ensure that the input is valid, if not request again
- [x] Implement "playRound(humanChoice, computerChoice)"
    - Add global "humanScore" and "computerScore" variables
    - Checks round winner
    - Increases round winners score by 1
    - Announce round winner and both scores, in the console
- [x] Implement "playGame()"
    - Plays 5 rounds
    - At the end announce game winner with both scores, in the console


#### Logic:

rock loses paper

rock wins scissors

paper loses scissors

everything else is a tie

### Dev stage 2
9.7.2024-

Add UI, and make necessary modifcations to app.
- [x] Set up GIT branch for rps-ui
- [x] Add "rock", "paper" and "scissors" buttons
    - Add event listeners that calls playRound() with correct playerSelection
- [x] Add div for displaying results
    - Remove console.log() and replace them with DOM methods
- [x] Display running score, and announce winner after computer or player reaches 5 points
- [ ] Merge rps-ui with main
    1. git checkout mian
    2. git merge rps-ui
    3. git push origin main
    4. git branch -d rps-ui
    5. git push origin --delete rps-ui