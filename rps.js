console.log("heya!");
const NOCHOICE = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const RPS_ERR_OK = 0;
const RPS_ERR_BAD_ENTRY = 1;

const RPS_EQUAL = 0;
const RPS_HUMAN_WON = 1;
const RPS_COMPUTER_WON = 2;

const MAX_ROUNDS = 5;

let humanChoice = NOCHOICE;
let humanChoiceStr = "";
let computerChoice = NOCHOICE;
let computerChoiceStr = "";

let choicesStr = "";

const rpsPromptStr = "rock, paper, or scissors?";
const rpsRetryStr = "try again!\n";
const rpsEqualStr = "a tie!\n";
const rpsHumanWonStr = "you won!";
const rpsComputerWonStr = "you lost...";

let rpsResult = 0;

let roundsPlayed = 0;
let scoreHuman = 0;
let scoreComputer = 0;

let currRoundStr = "";
let currScoreStr = "";

let headerStr = "";

function getComputerChoice() {
    let temp = Math.random();
    if ( temp < (1/3)) {
        computerChoiceStr = "computer chose.. rock! ";
        computerChoice = ROCK;
    } else if (temp < (2/3)) {
        computerChoiceStr = "computer chose.. paper! ";
        computerChoice = PAPER;
    } else {
        computerChoiceStr = "computer chose.. scissors! ";
        computerChoice = SCISSORS;
    }
    console.log(computerChoiceStr + temp);
    return;
}

function promptHuman(str){
    let humanRPS = prompt(str).toLowerCase();
    return humanRPS;
}
function getHumanChoice(str) {
    let err_t = RPS_ERR_OK;
    let humanRPS = promptHuman(str);

    switch (humanRPS) {
        case "rock":
            humanChoice = ROCK;
            humanChoiceStr = "You chose.. rock!";
            break;
        case "paper":
            humanChoice = PAPER;
            humanChoiceStr = "You chose.. paper!";
            break;
        case "scissors":
            humanChoice = SCISSORS;
            humanChoiceStr = "You chose.. scissors!";
            break;
        default:
            err_t = RPS_ERR_BAD_ENTRY;
            break;
    }
    return err_t;
}

function computeRPS() {
    switch (humanChoice) {
        case ROCK:
            switch (computerChoice) {
                case ROCK:
                    return RPS_EQUAL;
                    break;
                case PAPER:
                    return RPS_COMPUTER_WON;
                    break;
                case SCISSORS:
                    return RPS_HUMAN_WON;
                    break;
                default:
                    break;
            }
            break;
        case PAPER:
            switch (computerChoice) {
                case ROCK:
                    return RPS_HUMAN_WON;
                    break;
                case PAPER:
                    return RPS_EQUAL;
                    break;
                case SCISSORS:
                    return RPS_COMPUTER_WON;
                    break;
                default:
                    break;
            }
            break;
        case SCISSORS:
            switch (computerChoice) {
                case ROCK:
                    return RPS_COMPUTER_WON;
                    break;
                case PAPER:
                    return RPS_HUMAN_WON;
                    break;
                case SCISSORS:
                    return RPS_EQUAL;
                    break;
                default:
                    break;
            }
            break;
        default:
            console.log("HUH ERROR");
            break;
    }
}

function prepHeader() {
    currRoundStr = "Round: " + (roundsPlayed+1) + "/" + MAX_ROUNDS + "\n";
    currScoreStr = "Human: " + scoreHuman + "\nComputer: " + scoreComputer + "\n\n";
    headerStr = currRoundStr + currScoreStr;
}

function prepReportChoices() {
    choicesStr = humanChoiceStr + "\n" + computerChoiceStr + "\n\n";
}

while (roundsPlayed < MAX_ROUNDS) {
    prepHeader();
    
    if (getHumanChoice(headerStr + rpsPromptStr) != RPS_ERR_OK) {
        while (getHumanChoice(headerStr + rpsRetryStr + rpsPromptStr) != RPS_ERR_OK) {
        }
    };
    
    getComputerChoice();
    prepReportChoices();
    rpsResult = computeRPS();
    while (rpsResult == RPS_EQUAL) {
        while (getHumanChoice(headerStr + choicesStr + rpsEqualStr + rpsPromptStr) != RPS_ERR_OK) {
        }
        getComputerChoice();
        rpsResult = computeRPS();
    }
    if (rpsResult == RPS_HUMAN_WON) {
        scoreHuman += 1;
        prepHeader();
        window.alert(headerStr + choicesStr + rpsHumanWonStr);
    } else {
        scoreComputer += 1;
        prepHeader();
        window.alert(headerStr + choicesStr + rpsComputerWonStr);
    }
    roundsPlayed += 1;
}

if (scoreHuman > scoreComputer) {
    currScoreStr = "RESULTS:\n" + "Human: " + scoreHuman + "\nComputer: " + scoreComputer + "\n\n";
    window.alert(currScoreStr + "YOU WON!!!!!");
} else {
    window.alert(currScoreStr + "YOU LOST.....");
}